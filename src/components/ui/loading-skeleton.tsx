import React from "react";

const ProduceItemSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 pb-3 animate-pulse">
      <div className="w-full aspect-video bg-gray-200 rounded-xl"></div>
      <div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default ProduceItemSkeleton;
