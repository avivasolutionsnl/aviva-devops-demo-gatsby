import React from "react"
import "./_about.scss"
import ScrollAnimation from "react-animate-on-scroll"

const About = (
  {
    image,
    description,
    title,
    text,
    address,
    url,
  }) => {

  return (
    <div className="container">
      <section className="about" id="about">
        <div className="about__grid">

          <div className="about__image">
            <img src={image} loading="lazy" alt={description}/>
          </div>

          <div className="about__text">
            <ScrollAnimation animateIn="flipInX" animateOnce={true}>
              <h2>{title}</h2>
            </ScrollAnimation>
            <span dangerouslySetInnerHTML={{ __html: text }}></span>
            <span dangerouslySetInnerHTML={{ __html: address }}></span>

            <a href={url} target="_blank" rel="noopener noreferrer" className="button button--black">Ga naar Aviva
              Solutions</a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About