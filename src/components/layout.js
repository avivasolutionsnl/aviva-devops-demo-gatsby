import React from "react"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import "../assets/scss/main.scss"
import "animate.css/animate.min.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import * as Icons from "@fortawesome/pro-regular-svg-icons"

// Map all icons from FontAwesome
const iconList = Object
  .keys(Icons)
  .filter(key => key !== "far" && key !== "prefix")
  .map(icon => Icons[icon])

library.add(...iconList)

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")("a[href*=\"#\"]")
}

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
