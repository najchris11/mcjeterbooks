import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const semiCasual = localFont({
  src: "../public/fonts/Semi-Casual.ttf",
  variable: "--font-semi-casual",
  display: "swap",
});

const bistroblock = localFont({
  src: "../public/fonts/Bistroblock-oygz.ttf",
  variable: "--font-bistroblock",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. C. Jeter Books",
  description: "Official website of M. C. Jeter, indie author of The Gems fantasy novel series.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${semiCasual.variable} ${bistroblock.variable}`}>
        <Script
          id="mailerlite-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},
              l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '471963');
            `,
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
