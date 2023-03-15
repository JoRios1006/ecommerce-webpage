import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Hola! Que estás buscando?"
        className="bg-gray-800 text-white rounded-full py-2 px-4 pl-10 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:text-gray-900"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg className="h-6 w-6 fill-current text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 3C6.5 3 4 5.5 4 8.5C4 11.5 6.5 14 9.5 14C10.7 14 11.8 13.6 12.8 12.9L15.3 15.4C15.7 15.8 16.3 16 16.9 16C18.7 16 20 14.7 20 12.9C20 11.1 18.7 9.8 16.9 9.8C16.3 9.8 15.8 10 15.4 10L12.9 7.5C13.6 6.5 14 5.4 14 4.2C14 1.9 12.1 0 9.8 0C7.5 0 5.6 1.9 5.6 4.2C5.6 5.4 6 6.5 6.7 7.5L4.2 10C3.6 9.4 3 8.6 3 7.8C3 5.3 5.3 3 7.8 3C8.6 3 9.4 3.4 10 4L9.5 3ZM9.5 12.2C7.2 12.2 5.3 10.3 5.3 8C5.3 5.7 7.2 3.8 9.5 3.8C11.8 3.8 13.7 5.7 13.7 8C13.7 10.3 11.8 12.2 9.5 12.2Z"/>
        </svg>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 p-2 rounded-md">
            <img className="h-8 w-auto mr-2" src="https://www.svgrepo.com/show/463682/store.svg" alt="Logo" />
            <span className="text-black font-bold text-xl">Mi Tienda</span>
          </div>
          <SearchBar />
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-300 hover:text-white">Promociones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Categorías</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contáctanos!</a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-white focus:outline-none" onClick={toggleMenu}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-4 space-y-4">
            <li><a href="#" className="text-gray-300 hover:text-white">Volver</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Características</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contáctanos!</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">Compra las últimas novedades</h1>
          <p className="mt-5 text-xl text-gray-300">Encuentra tus productos favoritos ahora mismo!</p>
          <div className="mt-8 space-x-6">
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700">
              Compra ahora
            </a>
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              Mas info
            </a>
          </div>
        </div>
      </div>

      {/* Productos Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">Los recién llegados</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mira nuestros últimos productos
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipiscing elit. Et, consequatur.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/2180883/pexels-photo-2180883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

              {/* Product card component */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <img className="h-48 w-full object-cover" src="https://images.pexels.com/photos/2647714/pexels-photo-2647714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product" />
                  <h3 className="mt-2 text-gray-900 text-sm font-medium">Nombre del producto</h3>
                  <p className="mt-1 text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="mt-2">
                    <span className="text-gray-900 text-lg font-medium">$99.00</span>
                    <span className="text-gray-500 text-sm ml-2">En Stock!</span>
                  </div>
                  <div className="mt-3">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </div>
      </div>
      {/* Newsletter Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Suscríbete a nuestro boletín!</h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Nullam id feugiat turpis, eget pulvinar neque. 
            </p>
            <form action="#" method="POST" className="mt-4 sm:flex">
              <label htmlFor="emailAddress" className="sr-only">Email address</label>
              <input type="email" name="emailAddress" id="emailAddress" autoComplete="email" required className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:outline-none rounded-md" placeholder="suemail@ejemplo.com" />

              <button type="submit" className="mt-3 w-full px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Suscribase
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="/" className="text-base text-gray-500 hover:text-gray-900">
                Volver
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Productos
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Características
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Acerca de nosotros
              </a>
            </div>

            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                Contáctanos!
              </a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            © 2023 JOSE AGUSTIN RIOS. All rights reserved.
          </p>
        </div>
      </footer>

          </div>
          );
  }

export default App;