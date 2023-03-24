import React from "react";
import {
  TvIcon,
  DevicePhoneMobileIcon,
  FireIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { LittleComponent } from "./LittleComponent";

// Televisores  Celulares  Calefacción  Lavado  Heladeras y freezers  Notebooks
const CategorySection = () => {
  const categories = [
    [<TvIcon className="h-20 w-20 text-white" />, "Televisores"],
    [<DevicePhoneMobileIcon className="h-20 w-20 text-white" />, "Celulares"],
    [<FireIcon className="h-20 w-20 text-white" />, "Calefacción"],
    [<ComputerDesktopIcon className="h-20 w-20 text-white" />, "Notebooks"],
  ];

  return (
    <div className="flex justify-around py-4">
      {categories.map((category, index) => (
        <LittleComponent key={index} icon={category[0]} text={category[1]} />
      ))}
    </div>
  );
};

export default CategorySection;
