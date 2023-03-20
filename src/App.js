import "./App.css";
import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  DevicePhoneMobileIcon,
  FireIcon,
  MagnifyingGlassIcon,
  TvIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        voluptatum quas quidem quia. Quisquam voluptates, quod, quia, voluptate
        quae voluptatem quibusdam quos voluptatum quas quidem quia. Quisquam
        voluptates, quod, quia, voluptate quae voluptatem quibusdam quos
        voluptatum quas quidem quia.
      </p>
    </div>
  );
};

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

// Cocción  Refrigeración  Equipamiento Comercial  Hogar  Panadería
/* 
Cocción
  Cocinas 
    Cocinas Semi Industrial 
    Cocinas Industriales 
    Cocinas Eléctricas 
  Hornos 
    Hornos Pizzeros  
    Hornos Pasteleros  
    Hornos Eléctricos  
    Hornos Convectores  
  Purificadores y Extractores de aire  
    Campanas

Refrigeración
  Heladera Exhibidoras 
    Exhibidoras Verticales 
  Freezers         
    Horizontal         
    Vertical     
  Heladeras  

  Equipamiento Comercial
    Balanzas Electrónicas     
    Licuadora Industrial

Hogar
  Electrodomésticos         
    Balanza Digital         
    Sandwicheras         
    Microondas         
    Pavas Electricas         
    Licuadoras         
    Batidoras     
  Televisores         
    Smart TV     
  Termotanques

Panadería
  Sobadora         
    Manual     
  Amasadora     
  Batidoras     
  Hornos         
    Hornos Pasteleros         
    Hornos Convectores     
  Heladeras Exhibidoras  
*/
const tabs = [
  [
    "Cocción",
    <div>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Cocinas
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Semi Industrial
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Industriales
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Cocinas Eléctricas
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Hornos
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pizzeros
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pasteleros
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Eléctricos
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Convectores
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Purificadores y Extractores de aire
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Campanas
      </h2>
    </div>,
  ],
  [
    "Refrigeración",
    <div>
      <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Heladera Exhibidoras
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Exhibidoras Verticales
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Freezers
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Horizontal
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4  ">
        Vertical
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4  font-bold text-lg">
        Heladeras
      </h1>
    </div>,
  ],
  [
    "Equip. Comercial",
    <div>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Balanzas Electrónicas
      </h1>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Licuadora Industrial
      </h1>
    </div>,
  ],
  [
    "Hogar",
    <div>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Electrodomésticos
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Balanza Digital
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Sandwicheras
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Microondas
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Pavas Electricas
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Licuadoras
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Batidoras
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Televisores
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Smart TV
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Termotanques
      </h1>
    </div>,
  ],
  [
    "Panadería",
    <div>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Sobadora
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Manual
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Amasadora
      </h1>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Batidoras
      </h1>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Hornos
      </h1>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Pasteleros
      </h2>
      <h2 className="hover:underline decoration-red-200 decoration-4 ">
        Hornos Convectores
      </h2>
      <h1 className="hover:underline decoration-red-200 decoration-4 font-bold text-lg">
        Heladeras Exhibidoras
      </h1>
    </div>,
  ],
];

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className="px-20 flex justify-center">
      <div className="relative flex w-full">
        {tabs.map(([title, content], id) => (
          <div
            key={id}
            className="inline-block mr-2 w-full"
            onMouseEnter={() => setActiveTab(id)}
            onMouseLeave={() => setActiveTab(null)}
          >
            <button className="text-white py-2 px-4 text-lg font-black">
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
              <div className="absolute z-10 top-full left-0 w-full p-2 bg-red-600 text-white shadow-lg">
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
    <div className="bg-red-700 flex border-b border-red-300 justify-end">
      <div className="flex items-center ">
        <p className="text-white text-sm font-bold p-2">Contacto</p>
        <p className="text-white text-sm p-2">+54 0376 442-1154</p>
        <hr className="border-white border mx-2 py-2" />
        <p className="text-white text-sm font-bold p-2">Mail</p>
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
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative w-full mx-3">
      <input
        type="text"
        placeholder="Hola! Que estás buscando?"
        className="bg-white text-black rounded py-2 px-4 pl-2 w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:text-gray-900"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

const CustomLink = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

const StyledCustomLink = (style) => (props) => {
  return (
    <div className={style}>
      <CustomLink {...props}>{props.children}</CustomLink>
    </div>
  );
};

const Navbar = () => {
  const CustomLinkStyle =
    "text-white hover:underline decoration-red-400 decoration-4 ";
  const SimpleCustomLink = StyledCustomLink(CustomLinkStyle);
  const [isOpen, setIsOpen] = useState(false);
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
                <SimpleCustomLink href="#">Promociones</SimpleCustomLink>
              </li>
              <li>
                <SimpleCustomLink href="#">Categorías</SimpleCustomLink>
              </li>
              <li></li>
              <li>
                <SimpleCustomLink href="/about">Contáctanos!</SimpleCustomLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="text-white hover:underline decoration-red-400 decoration-4 "
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
            <SimpleCustomLink href="#">Volver</SimpleCustomLink>
            <SimpleCustomLink href="#">Características</SimpleCustomLink>
            <SimpleCustomLink href="#">Pricing</SimpleCustomLink>
            <SimpleCustomLink href="#">Contáctanos!</SimpleCustomLink>
          </ul>
        </div>
      </div>
      <TabMenu />
    </nav>
  );
};
const HeroSection = () => {
  const CustomLinkStyle =
    "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-700";
  const SimpleCustomLink = StyledCustomLink(CustomLinkStyle);
  return (
    <div className="bg-red-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          Compra las últimas novedades
        </h1>
        <p className="mt-5 text-xl text-gray-300">
          Encuentra tus productos favoritos ahora mismo!
        </p>
        <div className="mt-8 space-x-6">
          <SimpleCustomLink href="#">Compra ahora</SimpleCustomLink>
          <SimpleCustomLink href="#">Mas info</SimpleCustomLink>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  productImageCustomLink,
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
          src={productImageCustomLink}
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
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
      {products.map(
        (
          [
            productImageCustomLink,
            productaName,
            productDescription,
            price,
            isStockAvailable,
          ],
          index
        ) => (
          <ProductCard
            key={index}
            productImageCustomLink={productImageCustomLink}
            productName={productaName}
            productDescription={productDescription}
            price={price}
            isStockAvailable={isStockAvailable}
          />
        )
      )}
    </Slider>
  );
};

const ProductosSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Ofertas Hasta 35% OFF!
          </h2>
        </div>
        <ProductCarousel />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Ofertas Hasta 35% OFF!
          </h2>
        </div>
        <ProductCarousel />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Ofertas Hasta 35% OFF!
          </h2>
        </div>
        <ProductCarousel />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Ofertas Hasta 35% OFF!
          </h2>
        </div>
        <ProductCarousel />
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-12">
        <div className="lg:text-center">
          <h2 className="text-base text-gray-600 font-semibold tracking-wide uppercase">
            Ofertas Hasta 35% OFF!
          </h2>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
};
const NewsletterSection = () => {
  return (
    <div className="bg-red-50">
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
              className="mt-3 w-full px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
            >
              Suscribase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const CustomLinkElement = ({ href, children }) => {
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
          <CustomLinkElement href="/" CustomLinkText="Inicio" />
          <CustomLinkElement href="/" CustomLinkText="Productos" />
          <CustomLinkElement href="/" CustomLinkText="Características" />
          <CustomLinkElement href="/" CustomLinkText="Blog" />
          <CustomLinkElement href="/" CustomLinkText="Acerca de nosotros" />
          <CustomLinkElement href="/" CustomLinkText="Contáctanos!" />
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
      <div className="bg-red-500 rounded-full p-6 inline-block mx-6">
        {icon}
      </div>
      <div className="text-black uppercase text-xl mt-2">{text}</div>
    </div>
  );
};
// Televisores  Celulares  Calefacción  Lavado  Heladeras y freezers  Notebooks
const CategorySection = () => {
  const categories = [
    [<TvIcon className="h-20 w-20 text-white" />, "Televisores"],
    [<DevicePhoneMobileIcon className="h-20 w-20 text-white" />, "Celulares"],
    [<FireIcon className="h-20 w-20 text-white" />, "Calefacción"],
    [<ComputerDesktopIcon className="h-20 w-20 text-white" />, "Notebooks"],
  ];

  return (
    <div className="flex justify-around py-4">
      {categories.map((category, index) => (
        <LittleComponent key={index} icon={category[0]} text={category[1]} />
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-red-100">
      <Navbar />
      <Carousel />
      <CategorySection />
      <ProductosSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
