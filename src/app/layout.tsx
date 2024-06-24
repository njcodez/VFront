import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata = {
  title: "VFront",
  description: "Cover page generation. Simplified",
  icons: [{ rel: "icon", url: "icon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <main>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer /></main>
      </body>
    </html>
  );
}
