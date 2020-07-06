import React from "react"
import "./_footer.scss"
import logo from "../../assets/images/AvivaSolutions.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="https://avivasolutions.nl" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Aviva Solutions"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer