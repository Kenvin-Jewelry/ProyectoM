import React from "react"
import Navbar from "../common/components/navbar"
import Footer from "../common/components/footer"
import GoldenBackground from "../common/components/goldenBackground"
import ContactForm from "../landig/ContactForm"

const ContactoPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-semibold text-amber-400 mb-4 text-center">¿Tienes alguna consulta de producto?</h1>
          <p className="text-lg text-amber-300/80 mb-8 text-center">
            Rellena el formulario y nuestro equipo te enviará la información detallada sobre el producto que te interese.
          </p>
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactoPage 