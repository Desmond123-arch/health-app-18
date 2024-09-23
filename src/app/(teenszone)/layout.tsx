import { ReactNode } from "react";
import TeensNav from "./_components/teens-nav";

export default function TeensLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col">
        <TeensNav />
        {children}
      </div>
    </>
  );
}
