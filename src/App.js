import "./App.css";
import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DevicePhoneMobileIcon, FireIcon, MagnifyingGlassIcon, TvIcon , ComputerDesktopIcon} from "@heroicons/react/24/solid";

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

// Cocción  Refrigeración  Equipamiento Comercial  Hogar  Panadería  ¡Sumate a nuestro Equipo! 

const tabs = [
  ["Cocción", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl."],
  ["Refrigeración", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl."],
  ["Equipamiento Comercial", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl."],
  ["Hogar", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl."],
  ["Panadería", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl. Sed euismod, nunc vitae lacinia lacinia, nunc nisl aliquam nunc, vitae ultricies nisl nunc vel nisl."],
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
            <button className="text-white py-2 px-4">{title}</button>
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
  const linkStyle = "text-gray-100 hover:text-white";
  const SimpleLink = StyledLink(linkStyle);
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
    "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-800 hover:bg-red-700";
  const SimpleLink = StyledLink(linkStyle);
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

const LittleComponent = ({icon, text}) => {
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
    [<TvIcon className="h-20 w-20 text-white"/>, "Televisores"],
    [<DevicePhoneMobileIcon className="h-20 w-20 text-white"/>, "Celulares"],
    [<FireIcon className="h-20 w-20 text-white"/>, "Calefacción"],
    [<ComputerDesktopIcon className="h-20 w-20 text-white"/> , "Notebooks"],
  ];

  return (
    <div className="flex justify-around py-4">
      {categories.map((category, index) => (
        <LittleComponent key={index} icon={category[0]} text={category[1]} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="bg-red-100">
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
