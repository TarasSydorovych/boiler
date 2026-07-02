// import { NextResponse } from "next/server";
// import acceptLanguage from "accept-language";
// import { fallbackLng, languages } from "./app/i18n/settings";

// acceptLanguage.languages(languages);

// export const config = {
//   matcher:
//     "/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|admin|login|fonts|videos|uploads).*)",
// };

// const cookieName = "i18next";
// const BOT =
//   /(googlebot|bingbot|yandex|duckduck|ahrefs|semrush|screaming frog|sitebulb)/i;
// // Мідлвер для обробки запитів
// export function middleware(req) {
//   const url = new URL(req.url);
//   const { pathname } = url;
//   const ua = req.headers.get("user-agent") || "";

//   // Ботів не редіректимо взагалі — щоб hreflang мав 200 OK
//   if (BOT.test(ua)) return NextResponse.next();

//   // Корінь → /ua (один редірект максимум; людей можна скерувати)
//   if (pathname === "/") {
//     url.pathname = "/ua";
//     return NextResponse.redirect(url, 308);
//   }

//   // НІКОЛИ не робимо /ua ↔ /ua/ або /ru ↔ /ru/ (жодних слеш-редіректів)
//   // Валідні мови
//   if (!/^\/(ua|ru)(\/.*)?$/.test(pathname)) {
//     url.pathname = "/ua/404";
//     return NextResponse.rewrite(url);
//   }

//   let lng;
//   // Визначаємо мову запиту на основі куків або заголовків
//   if (req.cookies.has(cookieName)) {
//     lng = acceptLanguage.get(req.cookies.get(cookieName).value);
//     console.log("Мова визначена з куків:", lng); // Діагностичне повідомлення
//   }
//   if (!lng) {
//     lng = acceptLanguage.get(req.headers.get("Accept-Language"));
//     console.log("Мова визначена з заголовків:", lng); // Діагностичне повідомлення
//   }
//   if (!lng) {
//     lng = fallbackLng;
//     console.log("Використовується мова за замовчуванням:", lng); // Діагностичне повідомлення
//   }

//   // Перевіряємо, чи потрібно редіректити кореневий шлях
//   if (pathname === "/") {
//     console.log("Кореневий шлях, редірект на /ua");
//     return NextResponse.redirect(new URL("/ua", req.url));
//   }

//   // Перевірка наявності файлів, таких як index.php або інших подібних
//   if (pathname.match(/\.(php|asp|aspx|jsp|cgi)$/)) {
//     console.log("Зайшло в мідлвер php");
//     return NextResponse.rewrite(new URL(`/ua/404`, req.url));
//   }

//   // Перевіряємо, чи запит відповідає будь-якому із визначених маршрутів
//   const isMatched = pathname.match(/^\/(en|ua|pl|ru)(\/|$)/);
//   if (!isMatched) {
//     console.log("Невідповідний маршрут, перенаправляється на 404:", pathname);
//     return NextResponse.rewrite(new URL(`/ua/404`, req.url));
//   }
//   // Додаємо підтримку маршруту для /email у різних мовних контекстах
//   if (pathname.match(/^\/(en|ua|fr|it)\/email/)) {
//     console.log("Обробка маршруту /email для мови:", pathname.split("/")[1]);
//     return NextResponse.next();
//   }
//   // Обробка запитів, які відповідають визначеним маршрутам
//   if (req.headers.has("referer")) {
//     const refererUrl = new URL(req.headers.get("referer"));
//     const lngInReferer = languages.find((l) =>
//       refererUrl.pathname.startsWith(`/${l}`)
//     );
//     const response = NextResponse.next();
//     if (lngInReferer) {
//       response.cookies.set(cookieName, lngInReferer);
//       console.log("Встановлено мову з referer:", lngInReferer); // Діагностичне повідомлення
//     }
//     return response;
//   }

//   console.log("Завершення обробки запиту"); // Діагностичне повідомлення
//   return NextResponse.next();
// }
// src/middleware.ts
// src/middleware.js
import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./app/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher:
    "/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|admin|login|fonts|videos|uploads).*)",
};

const cookieName = "i18next";
const SUPPORTED = ["ua", "ru"]; // лише ці дві мови
const ALLOWED_QUERY = new Set(["page", "q"]); // дозволь те, що справді треба

export function middleware(req) {
  // не чіпаємо POST/PUT/PATCH/DELETE
  if (req.method !== "GET" && req.method !== "HEAD") return NextResponse.next();

  const url = new URL(req.url);
  const { pathname, searchParams } = url;

  // /index.*, навіть без префікса мови → /
  if (/^\/index(\.html?|\.php)?$/i.test(pathname)) {
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  // корінь → /ua
  if (pathname === "/") {
    url.pathname = "/ua";
    return NextResponse.redirect(url, 308);
  }

  // очікуємо /{lang}/...
  const m = pathname.match(/^\/([^/]+)(.*)$/);
  if (!m) return NextResponse.next();

  let lang = m[1];
  let rest = m[2] || "";
  const langLower = lang.toLowerCase();

  // якщо мова не підтримується — хай Next сам віддасть 404 (без soft-404)
  if (!SUPPORTED.includes(langLower)) return NextResponse.next();

  // канонізація регістру шляху (крім префікса мови)
  let normalizedRest = rest.replace(/[A-Z]/g, (s) => s.toLowerCase());
  // /index → без index
  normalizedRest = normalizedRest.replace(/\/index(\.html?|\.php)?$/i, "/");

  // whitelist параметрів (зайве обрізаємо)
  const kept = new URLSearchParams();
  for (const [k, v] of searchParams) {
    if (ALLOWED_QUERY.has(k)) kept.append(k, v);
  }

  const canonicalPath = `/${langLower}${normalizedRest}`;
  const canonicalSearch = kept.toString();

  if (
    pathname !== canonicalPath ||
    searchParams.toString() !== canonicalSearch
  ) {
    url.pathname = canonicalPath;
    url.search = canonicalSearch;
    return NextResponse.redirect(url, 301);
  }

  // фіксуємо cookie з мовою
  const res = NextResponse.next();
  res.cookies.set(cookieName, langLower, { path: "/" });

  if (!req.cookies.get(cookieName)) {
    const hdrLng =
      acceptLanguage.get(req.headers.get("accept-language") || "") ||
      fallbackLng;
    res.cookies.set(cookieName, hdrLng, { path: "/" });
  }

  return res;
}
