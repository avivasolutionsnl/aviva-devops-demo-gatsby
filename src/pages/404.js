import React from "react"
import SEO from "../components/seo"
import Footer from "../components/Footer/footer"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found"/>
    <main className="notfound">
      <div className="container">
        <h1>Deze pagina bestaat niet</h1>
        <p>Klik <a href="/">hier</a> om terug te keren naar de homepage.</p>
      </div>
    </main>
    <Footer />
  </>
)

export default NotFoundPage
