"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      setLoading(false)
      return
    }

    try {
      // Verificar si el usuario ya existe
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const userExists = existingUsers.some((user: User) => user.email === formData.email)

      if (userExists) {
        setError("Este correo electrónico ya está registrado")
        setLoading(false)
        return
      }

      // Crear nuevo usuario
      const newUser: User = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password, // En un caso real, esto debería estar hasheado
      }

      // Guardar usuario en localStorage
      localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]))
      
      router.push("/login")
    } catch (err) {
      setError("Ocurrió un error durante el registro")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-black/80 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-amber-500/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="text-center">
          <h2 className="mt-2 text-3xl font-extrabold text-amber-400 tracking-tight">
            Crear una cuenta
          </h2>
          <p className="mt-2 text-sm text-amber-300/80">
            Únete a nuestra comunidad
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-900/20 border-l-4 border-red-800/50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-amber-300">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-amber-500/30 rounded-md shadow-sm placeholder-amber-500/50 bg-black/50 text-amber-50 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Juan"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-amber-300">
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-amber-500/30 rounded-md shadow-sm placeholder-amber-500/50 bg-black/50 text-amber-50 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out"
                    placeholder="Pérez"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-300">
                Correo electrónico
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-amber-500/30 rounded-md shadow-sm placeholder-amber-500/50 bg-black/50 text-amber-50 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-amber-300">
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-amber-500/30 rounded-md shadow-sm placeholder-amber-500/50 bg-black/50 text-amber-50 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-300">
                Confirmar Contraseña
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-amber-500/30 rounded-md shadow-sm placeholder-amber-500/50 bg-black/50 text-amber-50 focus:outline-none focus:ring-amber-400 focus:border-amber-400 sm:text-sm transition duration-150 ease-in-out"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out transform hover:scale-[1.02]"
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-amber-500/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black/80 text-amber-400/80">¿Ya tienes una cuenta?</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="font-medium text-amber-400 hover:text-amber-300 transition duration-150 ease-in-out"
              >
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp 