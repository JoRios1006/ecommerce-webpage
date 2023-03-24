import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import products from "./products";

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

export default ProductCarousel;