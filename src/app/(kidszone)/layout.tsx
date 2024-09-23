import { ReactNode } from "react";
import KidsNav from "./_components/kidsNav";

export default function KidsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col">
        <KidsNav />
        {children}
      </div>
    </>
  );
}
