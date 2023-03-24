import React from "react"

// eslint-disable-next-line functional/functional-parameters
const NewsletterSection = () => {
    return (
        <div className="bg-red-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
            Suscríbete a nuestro
            boletín!
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit
            amet, consect adipiscing
            elit. Nullam id feugiat
            turpis, eget pulvinar
            neque.
                    </p>
                    <form
                        action="#"
                        method="POST"
                        className="mt-4 sm:flex"
                    >
                        <label
                            htmlFor="emailAddress"
                            className="sr-only"
                        >
              Email address
                        </label>
                        <input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none rounded-md"
                            placeholder="suemail@ejemplo.com"
                        />

                        <button
                            type="submit"
                            className="mt-3 w-full px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                        >
              Suscribase
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterSection
