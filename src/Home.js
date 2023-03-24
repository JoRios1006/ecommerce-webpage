import React from "react"
import ContactInfo from "./ContactInfo"
import Navbar from "./Navbar"
import Carousel from "./Carousel"
import CategorySection from "./CategorySection"
import ProductosSection from "./ProductosSection"
import NewsletterSection from "./NewsletterSection"
import FooterSection from "./FooterSection"

// eslint-disable-next-line functional/functional-parameters
const Home = () => {
    return (
        <div className="bg-red-100">
            <ContactInfo />
            <Navbar />
            <Carousel />
            <CategorySection />
            <ProductosSection />
            <NewsletterSection />
            <FooterSection />
        </div>
    )
}
export default Home
