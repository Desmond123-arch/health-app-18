import { ReactNode } from "react";
import Navigation from "./_components/navbar";

export default function landingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col max-w-screen overflow-x-hidden">
        <Navigation />
        {children}
      </div>
    </>
  );
}
