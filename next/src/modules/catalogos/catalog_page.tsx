import React from "react"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import ProductGrid from "./components/ProductGrid"
import GoldenBackground from "@modules/common/components/GoldenBackground"
import ChatBot from "../chat/chat"

const CatalogPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-pearl">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-normal text-grey-100 mb-6">
              Descubre nuestra colección exclusiva
            </h1>
            <p className="text-lg text-grey-90 mb-8 leading-relaxed">
              Más de 500 diseños únicos creados con los más altos estándares de calidad. 
              Perfectos para mayoristas que buscan diferenciarse en el mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 bg-champagne/20">
        <div className="container mx-auto px-4 py-12">
          <ProductGrid />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ChatBot/>
    </div>
  )
}

export default CatalogPage 