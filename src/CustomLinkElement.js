import React from "react"

const CustomLinkElement = ({
    href,
    children,
}) => {
    return (
        <div className="px-5 py-2">
            <a
                href={href}
                className="text-base text-gray-500 hover:text-gray-900"
            >
                {children}
            </a>
        </div>
    )
}

export default CustomLinkElement
