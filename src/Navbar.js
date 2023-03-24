import React from "react"
import StyledCustomLink from "./StyledCustomLink"
import SearchBar from "./SearchBar"
import OffcanvasSidebar from "./OffcanvasSidebar"
import TabMenu from "./TabMenu"
import { useState } from "react"

// eslint-disable-next-line functional/functional-parameters
const Navbar = () => {
    const CustomLinkStyle =
    "text-white hover:underline decoration-red-400 decoration-4 "
    const SimpleCustomLink =
    StyledCustomLink(CustomLinkStyle)
    const [isOpen, setIsOpen] =
    useState(false)
    return (
        <nav className="bg-red-600 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="bg-black px-4 flex justify-center -skew-x-12 ">
                        <span className="text-white text-center text-5xl font-black">
              CREDIMISION
                        </span>
                    </div>
                    <SearchBar />
                    <div className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li>
                                <SimpleCustomLink href="#">
                  Promociones
                                </SimpleCustomLink>
                            </li>
                            <li>
                                <SimpleCustomLink href="#">
                  Categorías
                                </SimpleCustomLink>
                            </li>
                        </ul>
                    </div>
                    <OffcanvasSidebar />
                    <div className="md:hidden">
                        <button
                            className="text-white hover:underline decoration-red-400 decoration-4 "
                            // eslint-disable-next-line functional/functional-parameters
                            onClick={() =>
                                setIsOpen(!isOpen)
                            }
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`md:hidden ${
                        isOpen
                            ? "block"
                            : "hidden"
                    }`}
                >
                    <ul className="mt-4 space-y-4">
                        <SimpleCustomLink href="#">
              Volver
                        </SimpleCustomLink>
                        <SimpleCustomLink href="#">
              Características
                        </SimpleCustomLink>
                        <SimpleCustomLink href="#">
              Pricing
                        </SimpleCustomLink>
                        <SimpleCustomLink href="#">
              Contáctanos!
                        </SimpleCustomLink>
                    </ul>
                </div>
            </div>
            <TabMenu />
        </nav>
    )
}

export default Navbar
