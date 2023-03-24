import React from "react";


const InCartProductCard = ({
  productImageCustomLink,
  productName,
  productDescription,
  price,
  isStockAvailable,
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-2 sm:p-6">
        <img
          className="h-20 w-full object-cover"
          src={productImageCustomLink}
          alt="Product"
        />
        <h3 className="mt-2 text-gray-900 text-sm font-medium">
          {productName}
        </h3>
        <div className="mt-2">
          <span className="text-gray-900 text-sm font-medium">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default InCartProductCard;
