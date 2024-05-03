import { Montserrat } from "next/font/google";
import Script from "next/script";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Layout } from "@/components/custom/Layout";

config.autoAddCss = false;
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light",
  themeColor: "#ffffff",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />

        <Script type="text/javascript" id="g-tag">
          {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NK6JXQ2W');
              `}
        </Script>
      </head>

      <body
        className={`${montserrat.className} relative bg-[#F7F8F9] select-none`}
      >
        <Layout>{children}</Layout>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK6JXQ2W"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
