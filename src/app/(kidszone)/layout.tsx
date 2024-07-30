import { ReactNode } from "react";

export default function KidsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col">{children}</div>
    </>
  );
}
