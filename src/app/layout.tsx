import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import { ShootingStars } from "@/components/ui/backgrounds/shooting-stars";
import { StarsBackground } from "@/components/ui/backgrounds/shooting-background";
import Footer from "./(landing)/Footer";

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
      <body className={inter.className}>{children}
        <Footer/>
      </body>
    </html>
  );
}
