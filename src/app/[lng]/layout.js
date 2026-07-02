// import { Inter } from "next/font/google";
// import "./globals.css";
// import { dir } from "i18next";
// import { languages } from "../i18n/settings";
// import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

// export default function RootLayout({ children, params: { lng } }) {
//   return (
//     <html lang={lng} dir={dir(lng)}>
//       <head>
//         {/* Google Tag Manager */}
//         <Script id="gtm-script" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-P45FZ9QR');`}
//         </Script>
//         {/* End Google Tag Manager */}
//       </head>
//       <body className={inter.className}>
//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-P45FZ9QR"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* End Google Tag Manager (noscript) */}

//         {children}
//       </body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children, params: { lng } }) {
  const domain = "https://zp-boyler.zp.ua";

  return (
    <html lang={lng === "ua" ? "uk-UA" : "ru-UA"} dir={dir(lng)}>
      <head>
        {/* hreflang для української та російської */}
        {/* <link rel="alternate" hrefLang="uk" href="https://zp-boyler.zp.ua/ua" />
        <link rel="alternate" hrefLang="ru" href="https://zp-boyler.zp.ua/ru" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://zp-boyler.zp.ua/ua"
        /> */}

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P45FZ9QR');`}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P45FZ9QR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
