import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col max-w-screen p-5 overflow-x-hidden">
      <section className="min-h-60 flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
          Nutribrainiacs
        </h1>
        <p className="text-xl text-center">
          Discover the amazing health benefits of fruits and vegetables with our
          app!
        </p>
      </section>
      <section className="lg:max-w-4xl mx-auto flex flex-col gap-10 lg:flex-row justify-center items-center">
        {/* kids zone link card */}
        <Card className="bg-primary text-primary-foreground rounded-xl overflow-hidden">
          <div className="p-8 flex flex-col items-center">
            <BabyIcon className="w-16 h-16 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Kids Zone</h3>
            <p className="text-center mb-8 max-w-md">
              Discover the amazing health benefits of fruits and vegetables with
              our app!
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-sm">
              <Card className="bg-primary-foreground/10 text-primary-foreground p-4 rounded-xl">
                <div className="flex flex-col items-center">
                  <BananaIcon className="w-10 h-10 mb-2" />
                  <p className="text-center font-medium">Fruits</p>
                </div>
              </Card>
              <Card className="bg-primary-foreground/10 text-primary-foreground p-4 rounded-xl">
                <div className="flex flex-col items-center">
                  <CarrotIcon className="w-10 h-10 mb-2" />
                  <p className="text-center font-medium">Vegetables</p>
                </div>
              </Card>
            </div>
            <Link
              href="kids"
              className="inline-flex items-center animate-bounce hover:animate-none justify-center h-12 px-8 rounded-full bg-primary-foreground text-primary font-medium text-lg transition-colors hover:bg-primary-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-foreground"
              prefetch={false}
            >
              Click me now
            </Link>
          </div>
        </Card>

        {/* teens zone link card */}
        <Card className="bg-secondary-foreground/10 text-primary rounded-xl overflow-hidden">
          <div className="p-8 flex flex-col items-center">
            <UsersIcon className="w-16 h-16 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Teens Zone</h3>
            <p className="text-center mb-8 max-w-md">
              Discover the amazing health benefits of fruits and vegetables with
              our app!
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-sm">
              <Card className="bg-secondary-foreground/20 text-primary p-4 rounded-xl">
                <div className="flex flex-col items-center">
                  <CarrotIcon className="w-10 h-10 mb-2" />
                  <p className="text-center font-medium">Vegetables</p>
                </div>
              </Card>
              <Card className="bg-secondary-foreground/20 text-primary p-4 rounded-xl">
                <div className="flex flex-col items-center">
                  <BananaIcon className="w-10 h-10 mb-2" />
                  <p className="text-center font-medium">Fruits</p>
                </div>
              </Card>
            </div>
            <Link
              href="/teens"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
              prefetch={false}
            >
              Enter Teens Zone
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}

function BabyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function BananaIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
      <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
    </svg>
  );
}

function CarrotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
      <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
      <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
    </svg>
  );
}
