import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Choose Your Adventure
        </h2>
        <p className="text-lg  mb-8">
          Discover exciting activities and challenges tailored for different age
          groups.
        </p>
        <div className="flex flex-row justify-center gap-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold"
          >
            <Link href={"/kids"}>Kids Zone</Link>
          </Button>
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-full text-gray-900 font-semibold"
          >
            <Link href={"/teens"}>Teens Zone</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
