import React from "react"

import Navbar from "../../common/components/navbar"
import Footer from "../../common/components/footer"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
