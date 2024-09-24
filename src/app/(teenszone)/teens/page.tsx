"use client";
import React from "react";
import { KidsCarousel } from "../_components/kids-carousel";

const KidsZone: React.FC = () => {
  return (
    <div className="max-w-full mx-auto min-h-screen px-4 py-8 flex flex-col items-center justify-center">
      <KidsCarousel />
    </div>
  );
};

export default KidsZone;
