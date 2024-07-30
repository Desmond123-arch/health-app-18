import { ReactNode } from "react";

export default function TeensLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className=" min-h-dvh flex flex-col">{children}</div>
    </>
  );
}
