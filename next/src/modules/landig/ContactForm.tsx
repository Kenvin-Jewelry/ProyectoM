"use client"

import React, { useState } from "react"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    email: "",
    companyName: "",
    phone: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [showLoading, setShowLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setShowLoading(true)
    const { contactName, email, companyName, phone } = formData
    if (!contactName || !email || !companyName || !phone) {
      setError("Por favor, completa todos los campos obligatorios.")
      setShowLoading(false)
      return
    }
    
    // Simulación de envío a API
    setTimeout(() => {
    console.log("Solicitud mayorista:", formData)
    setSubmitted(true)
      setShowLoading(false)
    }, 1500)
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl text-center border border-amber-500/20">
        <div className="text-5xl mb-6">✨</div>
        <h3 className="text-2xl font-semibold text-amber-400 mb-4">¡Gracias por tu interés!</h3>
        <p className="text-amber-300/80 mb-8">Tu solicitud ha sido recibida correctamente. Un asesor especializado se pondrá en contacto contigo en las próximas 24-48 horas.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-amber-400 hover:text-amber-300 font-medium transition-colors duration-200"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form
      id="formulario"
      className="max-w-xl mx-auto bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl space-y-6 border border-amber-500/20 relative"
      onSubmit={handleSubmit}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      {error && <p className="text-red-400 p-3 bg-red-900/20 rounded-md border border-red-800/50">{error}</p>}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-amber-300 mb-1">
          Nombre de contacto *
        </label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          value={formData.contactName}
          onChange={handleChange}
            className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
          required
        />
      </div>
      <div>
          <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
            className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
          required
        />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-amber-300 mb-1">
          Nombre de la empresa *
        </label>
        <input
          id="companyName"
          name="companyName"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
            className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
          required
        />
      </div>
      <div>
          <label htmlFor="phone" className="block text-sm font-medium text-amber-300 mb-1">
            Teléfono *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-amber-300 mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
          placeholder="Cuéntanos sobre tu negocio y qué esperas del programa de mayoristas..."
        ></textarea>
      </div>
      
      <div>
        <p className="text-sm text-amber-300/60 mb-6">Al enviar este formulario, aceptas recibir comunicaciones relacionadas con el programa de mayoristas de Kevin Jewelry.</p>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black px-6 py-3 rounded-md font-medium hover:from-amber-500 hover:to-yellow-400 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={showLoading}
        >
          {showLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </span>
          ) : "Enviar Solicitud"}
        </button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
    </form>
  )
}

export default ContactForm 