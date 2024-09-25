import type { Metadata } from "next";
import { Gabarito } from "next/font/google";

import Footer from "./(landing)/Footer";
import Navigation from "./(landing)/_components/navbar";

import "./globals.css";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutrition App",
  description: "A nutrition app for kids and teens",
  openGraph: {
    title: "Nutrition App",
    description: "A nutrition app for kids and teens",
    url: "https://wellkids.kennyanyi.me",
    images: [
      {
        url: "/opengraph-image.png", // replace with your actual image path
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden font-sans">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
