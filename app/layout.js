import { Montserrat } from "next/font/google";
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
      </head>

      <body
        className={`${montserrat.className} relative bg-[#F7F8F9] select-none`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
