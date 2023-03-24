import React from "react"

// eslint-disable-next-line functional/functional-parameters
const ContactInfo = () => {
    return (
        <div className="bg-red-700 flex border-b border-red-300 justify-end">
            <div className="flex items-center ">
                <p className="text-white text-sm font-bold p-2">
                    Contacto
                </p>
                <p className="text-white text-sm p-2">
                    +54 0376 442-1154
                </p>
                <hr className="border-white border mx-2 py-2" />
                <p className="text-white text-sm font-bold p-2">
                    Mail
                </p>
                <p className="text-white text-sm p-2">
                    <a
                        href="mailto:credimision1@gmail.com"
                        className="text-white text-sm p-2"
                    >
                        credimision1@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ContactInfo
