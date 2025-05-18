import React, { useState, useRef, useEffect } from "react"

const preguntasIniciales = [
  "¿Cómo vendo joyas?",
  "¿Cómo ser mayorista?",
  "Dudas sobre el catálogo",
  "¿Cómo es el envío?"
]

async function obtenerRespuesta(textoPregunta) {
  const respuestasSimuladas = {
    "¿Cómo vendo joyas?": "Para vender joyas, primero debes registrarte en nuestra plataforma y seleccionar tus productos favoritos.",
    "¿Cómo ser mayorista?": "Para ser mayorista, necesitas un mínimo de compra mensual y te damos precios especiales.",
    "Dudas sobre el catálogo": "Nuestro catálogo está disponible en línea 24/7 con todos los productos actualizados.",
    "¿Cómo es el envío?": "El envío es rápido y seguro, generalmente toma entre 3 y 5 días hábiles.",
  }
  return new Promise(resolve => {
    setTimeout(() => resolve(respuestasSimuladas[textoPregunta] || "Disculpa, no entiendo la pregunta."), 1000)
  })
}

export default function ChatBot() {
  const [showChat, setShowChat] = useState(false)
  const [chatMensajes, setChatMensajes] = useState([
    { id: 0, tipo: "bot", texto: "Hola, ¿en qué puedo ayudarte?" }
  ])
  const [input, setInput] = useState("")
  const mensajesRef = useRef(null)

  useEffect(() => {
    if (mensajesRef.current) {
      mensajesRef.current.scrollTop = mensajesRef.current.scrollHeight
    }
  }, [chatMensajes])

  const manejarPregunta = async (pregunta) => {
    if (!pregunta.trim()) return

    setChatMensajes(prev => [...prev, { id: prev.length + 1, tipo: "user", texto: pregunta }])
    setInput("")

    const respuesta = await obtenerRespuesta(pregunta)

    setChatMensajes(prev => [...prev, { id: prev.length + 2, tipo: "bot", texto: respuesta }])
  }

  const manejarEnviar = (e) => {
    e.preventDefault()
    manejarPregunta(input)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-rose text-rose-dark px-4 py-2 rounded-full shadow-md text-lg hover:bg-rose-light transition-colors duration-200"
          aria-label="Abrir chat"
        >
          💬 Chat
        </button>

        {showChat && (
          <div className="mt-2 w-[350px] h-[450px] bg-pearl border border-rose rounded-xl shadow-lg flex flex-col">
            {/* Mensajes */}
            <div
              ref={mensajesRef}
              className="flex-grow p-4 overflow-y-auto flex flex-col gap-3 no-scrollbar"
            >
              {chatMensajes.map(m => (
                <div
                  key={m.id}
                  className={`max-w-[80%] p-3 rounded-lg ${
                    m.tipo === "bot"
                      ? "bg-rose/50 text-rose-dark self-start"
                      : "bg-rose-light text-rose-dark self-end"
                  }`}
                >
                  {m.texto}
                </div>
              ))}
            </div>

            {/* Preguntas rápidas */}
            <div className="border-t border-rose p-2 grid grid-cols-2 gap-2">
              {preguntasIniciales.map((preg, idx) => (
                <button
                  key={idx}
                  onClick={() => manejarPregunta(preg)}
                  className="bg-rose/50 text-rose-dark rounded-md py-1 text-sm hover:bg-rose transition-colors duration-200"
                >
                  {preg}
                </button>
              ))}
            </div>

            {/* Input con botón enviar */}
            <form
              onSubmit={manejarEnviar}
              className="border-t border-rose p-2 flex gap-2 items-center"
            >
              <input
                type="text"
                placeholder="Escribe tu pregunta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-pearl border border-elegant rounded-md px-3 py-2 text-rose-dark placeholder-rose-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none font-body"
              />
              <button
                type="submit"
                className="bg-rose rounded-full w-9 h-9 flex justify-center items-center text-rose-dark hover:bg-rose-light transition-colors duration-200"
                aria-label="Enviar pregunta"
              >
                ➤
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  )
}
