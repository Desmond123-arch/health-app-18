import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Baby, BrainCircuit, HeartPulse } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-screen px-4 sm:px-6 lg:px-4">
      <div className="max-w-5xl  mx-auto flex justify-between items-center h-16">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="/api/placeholder/40/40"
              alt="Wellness Kids logo"
            />
            <AvatarFallback>
              <BrainCircuit className="stroke-green-600" />
            </AvatarFallback>
          </Avatar>
          <span className="hidden md:block ml-2 text-xl font-bold text-primary ">
            wellvegies
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="default"
            className="inline-flex gap-2 rounded-full text-sm"
          >
            <Baby />
            Kidszone
          </Button>
          <Button
            variant="outline"
            className="inline-flex text-black gap-2 rounded-full text-sm "
          >
            <HeartPulse />
            Teenszone
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
