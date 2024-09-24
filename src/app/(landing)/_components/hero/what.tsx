import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

interface ActivityItem {
  image: string;
  title: string;
}

const activities: ActivityItem[] = [
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/95a24ce4-ae13-42d8-b22d-b517a3d864b9.png",
    title: "Physical activity",
  },
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/f41dd70c-d439-41b2-96af-b9b19902de41.png",
    title: "Nutrition",
  },
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/dd7cc0d4-9664-404b-ba7d-f6c1b1383ad9.png",
    title: "Mental health",
  },
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/793c5225-04ea-44c4-8b66-01268b9e7751.png",
    title: "Educational content",
  },
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/9bd2997e-8c93-46b7-a746-d899c2c45d63.png",
    title: "Mindfulness and meditation",
  },
  {
    image:
      "https://cdn.usegalileo.ai/sdxl10/76af32bd-f1bc-44ed-b482-a485ca38a72e.png",
    title: "Games and challenges",
  },
];

const featuredActivities: string[] = [
  "https://cdn.usegalileo.ai/sdxl10/ac929ab1-aadd-40ef-878a-0b74518fc73b.png",
  "https://cdn.usegalileo.ai/sdxl10/c74ad3d4-c794-46ba-bb57-30b871295be8.png",
  "https://cdn.usegalileo.ai/sdxl10/17e9396a-04f6-4abe-b2d9-94be891199cc.png",
];

const WellKids: React.FC = () => {
  return (
    <div className="flex max-w-7xl mx-auto flex-col gap-10 px-4 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#111518] tracking-tight text-[32px] font-bold leading-tight sm:text-4xl sm:font-black sm:leading-tight sm:tracking-[-0.033em] max-w-[720px]">
          What you'll find in Well Kids
        </h1>
        <p className="text-[#111518] text-base font-normal leading-normal max-w-[720px]">
          Our mission is to help kids build healthier habits and have fun while
          doing it. From yoga to dance to cooking, we've got a wide range of
          activities and challenges that will keep them engaged and excited to
          learn.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div className="p-0">
              <div className="relative w-full aspect-video">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <p className="text-[#111518] text-base font-medium leading-normal mt-3 px-3">
                {activity.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">
        Featured activities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {featuredActivities.map((image, index) => (
          <Card key={index} className="flex flex-col gap-3">
            <CardContent className="p-0">
              <div className="relative w-full aspect-square">
                <Image
                  src={image}
                  alt={`Featured activity ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WellKids;
