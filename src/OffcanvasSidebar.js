import React, {
    Fragment,
    useState,
} from "react"
import { Transition } from "@headlessui/react"
import {
    ShoppingCartIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid"
import { InCartProductCard } from "./InCartProductCard"
import { products } from "./data"

function OffcanvasSidebar() {
    const [isOpen, setIsOpen] =
    useState(false)
    const [
        productImageCustomLink,
        productaName,
        productDescription,
        price,
        isStockAvailable,
    ] = products[0]
    return (
        <Fragment>
            {/* Toggle button */}
            <button
                className="p-2 text-white"
                onClick={() =>
                    setIsOpen(!isOpen)
                }
            >
                <ShoppingCartIcon className="w-6 h-6" />
            </button>

            {/* Offcanvas sidebar */}
            <Transition show={isOpen}>
                <button
                    className="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"
                    onClick={() =>
                        setIsOpen(false)
                    }
                >
                    <XMarkIcon className="absolute top-0 left-0 z-10 w-8 h-8 m-4 text-white bg-red-500 p-2 rounded-full font-black" />
                </button>
                <div className="fixed z-10 inset-y-0 right-0 w-2/6 px-8 py-4 bg-white shadow-lg transform transition ease-in-out duration-300">
                    <InCartProductCard
                        key={1}
                        productImageCustomLink={
                            productImageCustomLink
                        }
                        productaName={
                            productaName
                        }
                        productDescription={
                            productDescription
                        }
                        price={price}
                        isStockAvailable={
                            isStockAvailable
                        }
                    />
                </div>
            </Transition>
        </Fragment>
    )
}
export default OffcanvasSidebar
