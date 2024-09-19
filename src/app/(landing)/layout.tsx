import { ReactNode } from "react";
import Footer from "./Footer";
import FruitBackground from "./_components/animated";

export default function landingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col"> 
         <FruitBackground />
      {children}</div>
    </>
  );
}
