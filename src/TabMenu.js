import React from "react"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { tabs } from "./tabs"

const TabMenu = () => {
    const [activeTab, setActiveTab] =
    useState(null)
    return (
        <div className="px-20 flex justify-center">
            <div className="relative flex w-full">
                {tabs.map(
                    ([title, content], id) => (
                        <div
                            key={id}
                            className="inline-block mr-2 w-full"
                            onMouseEnter={() =>
                                setActiveTab(id)
                            }
                            onMouseLeave={() =>
                                setActiveTab(null)
                            }
                        >
                            <button className="text-white py-2 px-4 text-lg font-black">
                                {title}
                            </button>
                            <Transition
                                show={
                                    activeTab === id
                                }
                                enter="transition-opacity duration-75"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute z-10 top-full left-0 w-full p-2 bg-red-600 text-white shadow-lg">
                                    <div>
                                        {content}
                                    </div>
                                </div>
                            </Transition>
                        </div>
                    ),
                )}
            </div>
        </div>
    )
}

export default TabMenu
