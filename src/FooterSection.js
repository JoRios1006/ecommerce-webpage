import React from "react"
import CustomLinkElement from "./CustomLinkElement"

// eslint-disable-next-line functional/functional-parameters
const FooterSection = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav
                    className="-mx-5 -my-2 flex flex-wrap justify-center"
                    aria-label="Footer"
                >
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Inicio"
                    />
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Productos"
                    />
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Características"
                    />
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Blog"
                    />
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Acerca de nosotros"
                    />
                    <CustomLinkElement
                        href="/"
                        CustomLinkText="Contáctanos!"
                    />
                </nav>
                <p className="mt-8 text-center text-base text-gray-400">
          © 2023 JOSE AGUSTIN RIOS.
          All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default FooterSection
