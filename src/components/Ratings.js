import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as EmptyStarIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function Ratings() {
  return (
    <div className="flex items-center -ml-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <StarIcon
          key={index}
          className="w-6 h-6 flex flex-shrink-0 text-yellow-400"
        />
      ))}
      {Array.from({ length: 1 }).map((_, index) => (
        <EmptyStarIcon
          key={index}
          className="w-6 h-6 flex flex-shrink-0 text-yellow-400"
        />
      ))}
    </div>
  );
}
