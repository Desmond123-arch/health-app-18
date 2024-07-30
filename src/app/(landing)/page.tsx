import { Bird } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-muted-foreground flex h-60 flex-col items-center justify-center gap-y-4">
        <Bird className="h-12 w-12" strokeWidth={1.5} />

        <div className="text-center">
          <h3 className="text-lg font-semibold">We're all empty</h3>

          <p className="mt-2 max-w-[60ch]">
            check github issues to start working on something real quick
          </p>
        </div>
      </div>
    </main>
  );
}
