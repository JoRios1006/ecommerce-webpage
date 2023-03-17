import "./App.css";
import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Image = ({ src, alt }) => {
  return (
    <div className="p-3">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
};
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mx-auto mb-8">
      <Slider {...settings}>
        <Image src="https://picsum.photos/2000/300?random=1" alt="slide1" />
        <Image src="https://picsum.photos/2000/300?random=2" alt="slide2" />
        <Image src="https://picsum.photos/2000/300?random=3" alt="slide3" />
        <Image src="https://picsum.photos/2000/300?random=4" alt="slide4" />
        <Image src="https://picsum.photos/2000/300?random=5" alt="slide5" />
      </Slider>
    </div>
  );
};


const tabs = [
  ["Tab 1", "Tab 1 content"],
  ["Tab 2", "Tab 2 content"],
  ["Tab 3", "Tab 3 content"],
  ["Tab 4", "Tab 4 content"],
  ["Tab 5", "Tab 5 content"],
  ["Tab 6", "Tab 6 content"],
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className="px-20 flex justify-center">
      <div className="relative flex justify-around w-full">
        {tabs.map(([title, content], id) => (
          <div
            key={id}
            className="inline-block mr-2 w-full"
            onMouseEnter={() => setActiveTab(id)}
            onMouseLeave={() => setActiveTab(null)}
          >
            <button className="text-white py-2 px-4">
              {title}
            </button>
            <Transition
              show={activeTab === id}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute z-10 top-full left-0 w-full p-2 bg-white border border-gray-300 rounded-b-lg shadow-lg">
                <p>{content}</p>
              </div>
            </Transition>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2-2a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V3a1 1 0 00-1-1H4z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
            clipRule="evenodd"
          />
        </svg>
        <div>
          <p className="text-sm font-medium text-gray-500">
            Contact Us: support@example.com
          </p>
          <p className="text-xs text-gray-400">
            Mon - Fri: 8AM - 5PM, Sat - Sun: 9AM - 3PM
          </p>
        </div>
      </div>
      <button className="text-gray-500 hover:text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 5a1 1 0 011-1h3.586a1 1 0 01.707.293l6.414 6.414a1 1 0 010 1.414l-6.414 6.414a1 1 0 01-.707.293H6a1 1 0 01-1-1V5zm2 0v8.586L13.586 5H7z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
        <svg
          className="h-6 w-6 fill-current text-gray-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 3C6.5 3 4 5.5 4 8.5C4 11.5 6.5 14 9.5 14C10.7 14 11.8 13.6 12.8 12.9L15.3 15.4C15.7 15.8 16.3 16 16.9 16C18.7 16 20 14.7 20 12.9C20 11.1 18.7 9.8 16.9 9.8C16.3 9.8 15.8 10 15.4 10L12.9 7.5C13.6 6.5 14 5.4 14 4.2C14 1.9 12.1 0 9.8 0C7.5 0 5.6 1.9 5.6 4.2C5.6 5.4 6 6.5 6.7 7.5L4.2 10C3.6 9.4 3 8.6 3 7.8C3 5.3 5.3 3 7.8 3C8.6 3 9.4 3.4 10 4L9.5 3ZM9.5 12.2C7.2 12.2 5.3 10.3 5.3 8C5.3 5.7 7.2 3.8 9.5 3.8C11.8 3.8 13.7 5.7 13.7 8C13.7 10.3 11.8 12.2 9.5 12.2Z" />
        </svg>
      </div>
    </div>
  );
};

const Link = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-300 hover:text-white">
      {children}
    </a>
  );
};

const StyledLink = (style) => (props) => {
  return (
    <Link {...props} className={style}>
      {props.children}
    </Link>
  );
};

const Navbar = () => {
  const linkStyle = "text-gray-300 hover:text-white";
  const SimpleLink = StyledLink(linkStyle);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-900 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-gray-100 p-2 rounded-md">
            <img
              className="h-8 w-auto mr-2"
              src="https://www.svgrepo.com/show/463682/store.svg"
              alt="Logo"
            />
            <span className="text-black font-bold text-xl">Mi Tienda</span>
          </div>
          <SearchBar />
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <SimpleLink href="#">Promociones</SimpleLink>
              </li>
              <li>
                <SimpleLink href="#">Categorías</SimpleLink>
              </li>
              <li></li>
              <li>
                <SimpleLink href="#">Contáctanos!</SimpleLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
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
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="mt-4 space-y-4">
            <SimpleLink href="#">Volver</SimpleLink>
            <SimpleLink href="#">Características</SimpleLink>
            <SimpleLink href="#">Pricing</SimpleLink>
            <SimpleLink href="#">Contáctanos!</SimpleLink>
          </ul>
        </div>
      </div>
      <TabMenu />
    </nav>
  );
};
const HeroSection = () => {
  const linkStyle =
    "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700";
  const SimpleLink = StyledLink(linkStyle);
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Compra las últimas novedades
        </h1>
        <p className="mt-5 text-xl text-gray-300">
          Encuentra tus productos favoritos ahora mismo!
        </p>
        <div className="mt-8 space-x-6">
          <SimpleLink href="#">Compra ahora</SimpleLink>
          <SimpleLink href="#">Mas info</SimpleLink>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  productImageLink,
  productName,
  productDescription,
  price,
  isStockAvailable,
}) => {
  const [isInCart, setIsInCart] = useState(false);
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <img
          className="h-48 w-full object-cover"
          src={productImageLink}
          alt="Product"
        />
        <h3 className="mt-2 text-gray-900 text-sm font-medium">
          {productName}
        </h3>
        <p className="mt-1 text-gray-500 text-sm">{productDescription}</p>
        <div className="mt-2">
          <span className="text-gray-900 text-lg font-medium">${price}</span>
          <span className="text-gray-500 text-sm ml-2">
            {isStockAvailable ? "En Stock!" : "Fuera de stock"}
          </span>
        </div>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setIsInCart(!isInCart)}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            {isInCart ? "Quitar del carrito" : "Agregar al carrito"}
          </button>
        </div>
      </div>
    </div>
  );
};
const products = [
  [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
  [
    "https://images.pexels.com/photos/1813502/pexels-photo-1813502.jpeg",
    "Nombre del producto",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "99.00",
    true,
  ],
];
const ProductCarousel = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <Slider {...config}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          productImageLink={product[0]}
          productName={product[1]}
          productDescription={product[2]}
          price={product[3]}
          isStockAvailable={product[4]}
        />
      ))}
    </Slider>
  );
};

const ProductosSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Los recién llegados
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mira nuestros últimos productos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipiscing elit. Et, consequatur.
          </p>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
};
const NewsletterSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Suscríbete a nuestro boletín!
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Nullam id
            feugiat turpis, eget pulvinar neque.
          </p>
          <form action="#" method="POST" className="mt-4 sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
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
              className="mt-3 w-full px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Suscribase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const LinkElement = ({ href, children }) => {
  return (
    <div className="px-5 py-2">
      <a href={href} className="text-base text-gray-500 hover:text-gray-900">
        {children}
      </a>
    </div>
  );
};

const FooterSection = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <LinkElement href="/" LinkText="Inicio" />
          <LinkElement href="/" LinkText="Productos" />
          <LinkElement href="/" LinkText="Características" />
          <LinkElement href="/" LinkText="Blog" />
          <LinkElement href="/" LinkText="Acerca de nosotros" />
          <LinkElement href="/" LinkText="Contáctanos!" />
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          © 2023 JOSE AGUSTIN RIOS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const LittleComponent = ({ icon, text }) => {
  return (
    <div className="text-center">
      <div className="bg-gray-200 rounded-full p-4 inline-block">
        <i className={`${icon} text-4xl`} />
      </div>
      <div className="text-gray-700 mt-2">{text}</div>
    </div>
  );
};

const CategorySection = () => {
  return (
    <div className="flex justify-center">
      <LittleComponent icon="fas fa-user" text="User 1" />
      <LittleComponent icon="fas fa-user" text="User 2" />
      <LittleComponent icon="fas fa-user" text="User 3" />
      <LittleComponent icon="fas fa-user" text="User 4" />
      <LittleComponent icon="fas fa-user" text="User 5" />
      <LittleComponent icon="fas fa-user" text="User 6" />
    </div>
  );
};

function App() {
  return (
    <div className="bg-gray-100">
      {/* ContactInfo Section */}
      <ContactInfo />

      {/* Navbar */}
      <Navbar />

      {/* Carousell Section */}
      <Carousel />

      {/* Category Section */}
      <CategorySection />

      {/* Productos Section */}
      <ProductosSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;
