"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Cookies from "js-cookie"
import AuthBackground from "./shared/auth_background"
import { initializeSuperAdmin, defaultSuperAdmin } from "@modules/Auth/config"

interface User {
  firstName?: string
  lastName?: string
  nombre?: string
  apellido?: string
  email: string
  password: string
  role?: string
}

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Limpiar datos anteriores
    localStorage.clear()
    Cookies.remove('authenticated')
    
    // Inicializar super admin
    initializeSuperAdmin()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Si es el super admin, verificar directamente
      if (email === defaultSuperAdmin.email && password === defaultSuperAdmin.password) {
        const userData = {
          nombre: defaultSuperAdmin.nombre,
          apellido: defaultSuperAdmin.apellido,
          email: defaultSuperAdmin.email,
          role: defaultSuperAdmin.role
        }
        
        localStorage.setItem("currentUser", JSON.stringify(userData))
        Cookies.set("authenticated", "true", { expires: 7 })
        
        console.log("Super Admin autenticado:", userData)
        router.push("/landing")
        return
      }

      // Para otros usuarios
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find(u => u.email === email && u.password === password)

      if (user) {
        const userData = {
          nombre: user.firstName || user.nombre,
          apellido: user.lastName || user.apellido,
          email: user.email,
          role: user.role || 'user'
        }
        
        localStorage.setItem("currentUser", JSON.stringify(userData))
        Cookies.set("authenticated", "true", { expires: 7 })
        
        console.log("Usuario autenticado:", userData)
        router.push("/landing")
      } else {
        setError("Correo electrónico o contraseña incorrectos")
      }
    } catch (err) {
      console.error("Error durante el login:", err)
      setError("Ocurrió un error. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuthBackground />
      
      <div className="relative w-full max-w-md mx-auto p-6">
        <div className="bg-black/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 relative overflow-hidden border border-amber-500/20">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-amber-400">
              Bienvenido de nuevo
            </h2>
            <p className="text-sm text-amber-300/80 mt-2">
              Inicia sesión para continuar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="text-sm text-red-400 bg-red-900/20 p-3 rounded-md border border-red-800/50">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-300 mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
                placeholder="tu@ejemplo.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-amber-300 mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-amber-500/30 rounded-md text-sm transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 bg-black/50 text-amber-50 placeholder-amber-500/50"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-amber-400 hover:text-amber-300"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 text-black py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ease-in-out hover:from-amber-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </span>
              ) : (
                "Iniciar sesión"
              )}
            </button>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-amber-500/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-black/80 text-amber-400/80">
                    ¿No tienes una cuenta?
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Link
                  href="/sign-up"
                  className="text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  Regístrate aquí
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn 