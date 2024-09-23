import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import Footer from "./(landing)/Footer";
import "./globals.css";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutrition App",
  description: "A nutrition app for kids and teens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
