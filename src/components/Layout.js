import React from "react"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      {children} <Footer />
    </>
  )
}

export default Layout
