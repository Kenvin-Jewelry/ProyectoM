import React from "react"
import Hero from "./Hero"
import ValueSection from "./ValueSection"
import Testimonials from "./Testimonials"
import ContactForm from "./ContactForm"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import GoldenBackground from "../common/components/GoldenBackground"

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GoldenBackground />
      
      {/* 1. Header */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Sección de Valor */}
      <ValueSection />

      {/* 4. Testimonios */}
      <Testimonials />

      {/* 5. Formulario de contacto/registro */}
      <div id="formulario" className="flex-grow container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-4 text-amber-400">Regístrate como Mayorista</h2>
        <p className="text-amber-300/80 text-center max-w-xl mx-auto mb-8">
          Completa el formulario y únete a nuestra red exclusiva de mayoristas
        </p>
        <ContactForm />
      </div>

      {/* 6. Sección Agendar Reunión */}
      <div id="agendar" className="py-16 relative z-10">
        <div className="container mx-auto px-4 text-center relative">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
          <h2 className="text-3xl font-semibold mb-6 text-amber-400">¿Prefieres hablar con nosotros?</h2>
          <p className="text-amber-300/70 max-w-lg mx-auto mb-8">
            Agenda una reunión con uno de nuestros asesores para recibir información personalizada sobre nuestro programa de mayoristas.
          </p>
          <a 
            href="https://calendly.com/devkevinjewelry/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-8 py-3 rounded-md font-medium hover:from-amber-500 hover:to-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Agendar Reunión
          </a>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        </div>
      </div>

      {/* 7. Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage 