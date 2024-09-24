import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Baby, HeartPulse } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="w-screen px-4 sm:px-6 lg:px-4 fixed z-50 bg-white">
      <div className="max-w-7xl  mx-auto flex justify-between items-center h-16 ">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src="logo1.svg" alt="Wellness Kids logo" />
          </Avatar>
          <span className="hidden md:block ml-2 text-xl font-bold ">
            wellKids
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/kids">
            <Button
              variant="default"
              className="inline-flex gap-2 rounded-full text-sm bg-green-500
            hover:scale-110 transition duration-700 ease-in-out"
            >
              <Baby />
              Kidszone
            </Button>
          </Link>
          <Link href="/teens">
            <Button
              variant="outline"
              className="inline-flex text-black gap-2 rounded-full text-sm "
            >
              <HeartPulse />
              Teenszone
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
