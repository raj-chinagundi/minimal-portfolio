import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Raj Chinagundi - Portfolio",
  description: "Software Engineer & Full Stack Developer",
  openGraph: {
    title: "Raj Chinagundi - Portfolio",
    description: "Software Engineer & Full Stack Developer",
    siteName: "Raj Chinagundi - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Chinagundi - Portfolio",
    description: "Software Engineer & Full Stack Developer",
  },
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Nav />
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
