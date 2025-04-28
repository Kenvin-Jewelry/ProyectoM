"use client"
import React, { useEffect } from 'react'

interface ModalProps {
  title?: string
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  // Desactivar scroll de fondo cuando el modal está abierto
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-black/90 text-white rounded-lg w-full md:w-[65%] p-12 relative border-4 border-amber-400/70">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-400 hover:text-amber-600 text-2xl font-bold"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        {title && <h2 className="text-2xl font-semibold text-amber-400 mb-4">{title}</h2>}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal 