import React from "react"
import "./_session.scss"
import "./_variants.scss"
import ScrollAnimation from "react-animate-on-scroll"

const Session = ({ item }) => {
  const el = item.elements

  const color = el.color.value[0].codename
  const image = el.image.value[0].url
  const imageAlt = el.image.value[0].description
  const firstName = el.first_name.value
  const lastName = el.last_name.value
  const userFunction = el.function.value
  const company = el.company.value
  const title = el.title.value
  const text = el.text.resolvedData.html
  const about = el.about.value

  return (
    <ScrollAnimation animateIn="pulse" animateOnce={true}>
      <article className={`session ${color}`}>
        <div className="session__intro">

          <div className="session__image">
            <img loading="lazy" className="person" src={image} alt={imageAlt}/>
            <div className="color"></div>
          </div>

          <span className="session__name">{firstName} {lastName}</span>
          <span className="session__function">{userFunction}</span>
          <span className="session__company">{company}</span>
        </div>

        <div className="session__info">
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: text }}/>
        </div>

        <div className="speaker">
          <span className="speaker__title">Over {firstName}</span>
          <span className="speaker__text">{about}</span>
        </div>

      </article>
    </ScrollAnimation>
  )
}

export default Session