"use client"
import React, { useState, useEffect } from "react"
import Navbar from "../common/components/Navbar"
import Footer from "../common/components/Footer"
import GoldenBackground from "../common/components/GoldenBackground"

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CarritoPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cartItems')
    if (stored) setItems(JSON.parse(stored))
  }, [])

  const updateQuantity = (id: string, qty: number) => {
    const updated = items.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    )
    setItems(updated)
    localStorage.setItem('cartItems', JSON.stringify(updated))
  }

  const removeItem = (id: string) => {
    const filtered = items.filter(item => item.id !== id)
    setItems(filtered)
    localStorage.setItem('cartItems', JSON.stringify(filtered))
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Maneja el checkout: guarda el pedido en localStorage y limpia el carrito
  const handleCheckout = () => {
    const existingOrders = localStorage.getItem('orders')
    const orders = existingOrders ? JSON.parse(existingOrders) as any[] : []
    // Agrega un nuevo pedido con timestamp
    orders.push({ id: Date.now(), items, total, date: new Date().toISOString() })
    localStorage.setItem('orders', JSON.stringify(orders))
    // Limpia el carrito
    setItems([])
    localStorage.setItem('cartItems', JSON.stringify([]))
    // Opcional: mostrar confirmación
    alert('Pedido registrado correctamente')
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <GoldenBackground />
      
      {/* Header */}
      <Navbar />

      {/* Contenido */}
      <main className="flex-grow relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-normal text-amber-400 mb-6 text-center">Mi Carrito</h1>

          {items.length === 0 ? (
            <p className="text-center text-amber-300">Tu carrito está vacío.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lista de productos */}
              <div className="md:col-span-2 space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center bg-black/50 p-4 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg text-white font-medium">{item.name}</h3>
                      <p className="text-amber-300">${item.price.toFixed(2)}</p>
                      <div className="mt-2">
                        <label className="text-amber-300 text-sm mr-2">Cantidad:</label>
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          onChange={e => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-16 px-2 py-1 bg-black/70 text-white border border-amber-300 rounded"
                        />
                      </div>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="ml-4 text-red-500 hover:text-red-300">Eliminar</button>
                  </div>
                ))}
              </div>

              {/* Resumen */}
              <div className="bg-black/50 p-6 rounded-lg">
                <h2 className="text-2xl text-white mb-4">Resumen</h2>
                <p className="text-amber-300 mb-2">Total de artículos: {items.length}</p>
                <p className="text-amber-300 mb-4 font-semibold">Total: ${total.toFixed(2)}</p>
                <button className="w-full bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-500" onClick={handleCheckout}>
                  Proceder a Pago
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default CarritoPage 