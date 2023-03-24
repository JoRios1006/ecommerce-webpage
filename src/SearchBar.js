import React from "react"
import { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

// eslint-disable-next-line functional/functional-parameters
const SearchBar = () => {
    const [
        searchTerm,
        setSearchTerm,
    ] = useState("")
    const handleSearchChange = (
        event,
    ) => {
        // eslint-disable-next-line functional/no-expression-statements
        setSearchTerm(
            event.target.value,
        )
    }

    return (
        <div className="relative w-full mx-3">
            <input
                type="text"
                placeholder="Hola! Que estás buscando?"
                className="bg-white text-black rounded py-2 px-4 pl-2 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:text-gray-900"
                value={searchTerm}
                onChange={
                    handleSearchChange
                }
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
        </div>
    )
}

export default SearchBar
