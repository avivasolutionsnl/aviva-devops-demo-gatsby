import React from "react"
import "./_hero.scss"

const Hero = (
  {
    subTitle,
    title,
    text,
    meetup,
  }) => {

  const code = title.substr(0, 4)
  const stof = title.substr(4, 8)

  return (
    <section className="hero">
      <div className="container">
        <span className="hero__subtitle">{subTitle}</span>
        <h1><span className="hero__title--color">{code}</span>{stof}</h1>

        <div className="hero__text">
          <p>{text}</p>
          <a href={meetup} target="_blank" rel="noopener noreferrer" className="button button--red">Meld je gratis
            aan</a>
        </div>
      </div>
    </section>
  )
}


export default Hero