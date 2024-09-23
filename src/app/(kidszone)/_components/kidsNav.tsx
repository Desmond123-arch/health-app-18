import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const KidsNav = () => {
  return (
    <nav className="w-screen px-4 sm:px-6 lg:px-4 fixed z-50 bg-white">
      <div className="max-w-5xl  mx-auto flex justify-between items-center h-16 backdrop-blur-none">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src="logo1.svg" alt="Wellness Kids logo" />
          </Avatar>
          <span className="hidden md:block ml-2 text-xl font-bold ">
            wellKids
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button
              variant="outline"
              className="inline-flex text-black gap-2 rounded-full text-sm "
            >
              <Home />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default KidsNav;