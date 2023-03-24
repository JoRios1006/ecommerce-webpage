import React from "react"
const Image = ({ src, alt }) => {
    return (
        <div className="p-3">
            <img
                src={src}
                alt={alt}
                className="w-full"
            />
        </div>
    )
}
export default Image
