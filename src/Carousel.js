import React from "react"
import Slider from "react-slick"
import Image from "./Image"

// eslint-disable-next-line functional/functional-parameters
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="mx-auto mb-8">
            <Slider {...settings}>
                <Image
                    src="https://picsum.photos/2000/300?random=1"
                    alt="slide1"
                />
                <Image
                    src="https://picsum.photos/2000/300?random=2"
                    alt="slide2"
                />
                <Image
                    src="https://picsum.photos/2000/300?random=3"
                    alt="slide3"
                />
                <Image
                    src="https://picsum.photos/2000/300?random=4"
                    alt="slide4"
                />
                <Image
                    src="https://picsum.photos/2000/300?random=5"
                    alt="slide5"
                />
            </Slider>
        </div>
    )
}

export default Carousel
