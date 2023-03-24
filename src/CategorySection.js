import React from "react"
import {
    TvIcon,
    DevicePhoneMobileIcon,
    FireIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline"
import LittleComponent from "./LittleComponent"

// Televisores  Celulares  Calefacción  Lavado  Heladeras y freezers  Notebooks
// eslint-disable-next-line functional/functional-parameters
const CategorySection = () => {
    const categories = [
        [
            <TvIcon key={1} className="h-20 w-20 text-white" />,
            "Televisores",
        ],
        [
            <DevicePhoneMobileIcon key={2} className="h-20 w-20 text-white" />,
            "Celulares",
        ],
        [
            <FireIcon key={3} className="h-20 w-20 text-white" />,
            "Calefacción",
        ],
        [
            <ComputerDesktopIcon key={4} className="h-20 w-20 text-white" />,
            "Notebooks",
        ],
    ]

    return (
        <div className="flex justify-around py-4">
            {categories.map(
                (category, index) => (
                    <LittleComponent
                        key={index}
                        icon={category[0]}
                        text={category[1]}
                    />
                ),
            )}
        </div>
    )
}

export default CategorySection
