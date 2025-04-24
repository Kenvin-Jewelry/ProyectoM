const AuthBackground = () => {
  return (
    <>
      {/* Fondo con gradiente negro y efecto brillante */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#111111_12%,transparent_12.5%,transparent_87%,#111111_87.5%,#111111_100%)] bg-[length:20px_20px] opacity-10"></div>
      </div>

      {/* Formas decorativas doradas */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-400/20 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-300/20 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Línea decorativa superior dorada */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      {/* Efecto de brillo adicional */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 to-transparent opacity-20"></div>
    </>
  )
}

export default AuthBackground 