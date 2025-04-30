import React from 'react'
import Navbar from '../common/components/navbar'
import Footer from '../common/components/footer'
import GoldenBackground from '../common/components/goldenBackground'
import SubscriptionForm from './components/SubscriptionForm'

const NosotrosPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GoldenBackground />

      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-grow relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-amber-400 mb-6 text-center">Nosotros</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="flex justify-center items-center">
              <video
                src="/videos/vid2.mp4"
                className="w-32 md:w-1/2 rounded-md"
                controls
                autoPlay
                muted
                loop
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-xl md:text-2xl text-amber-300/80 text-justify">
                Nuestro propósito es ayudarte a ti a crear tu propia empresa exitosa en la industria del oro 18K laminado. KEVIN JEWELRY lleva 8 años de trayectoria; iniciamos en Colombia, en 2021 llegamos a España y en 2022 a Ecuador. Somos fabricantes directos y nuestras joyas se elaboran con los más altos estándares de calidad internacional. Empezamos vendiendo joyas al cliente final y, con el tiempo, transformamos la empresa. Hoy nuestro foco principal es ayudar al mayor número de personas posible a crear tu propia joyería y obtener los mejores resultados.
              </p>
              <p className="text-xl md:text-2xl text-amber-300/80 text-justify">
                Además, nos enorgullece brindar un servicio de asesoría personalizado, acompañándote en cada paso para impulsar tu negocio. Nuestra pasión por la calidad y la innovación se refleja en cada pieza, garantizando diseños exclusivos que se adaptan a las últimas tendencias del mercado.
              </p>
              <div className="flex justify-center">
                <SubscriptionForm />
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default NosotrosPage 