// import { Inter } from "next/font/google";
// import "./globals.css";
// import { dir } from "i18next";
// import { languages } from "../i18n/settings";

// const inter = Inter({ subsets: ["latin"] });

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

// export default function RootLayout({ children, params: { lng } }) {
//   return (
//     <html lang={lng} dir={dir(lng)}>
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import "./globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, s) {
                var widgetHash = 'yy8k5sq8r2nxpj900jt3', gcw = d.createElement(s); gcw.type = 'text/javascript'; gcw.async = true;
                gcw.src = '//widgets.binotel.com/getcall/widgets/' + widgetHash + '.js';
                var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
              })(document, window, 'script');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
