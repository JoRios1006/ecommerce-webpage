import React from "react";
import { useState } from "react";

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

export default ProductCard;