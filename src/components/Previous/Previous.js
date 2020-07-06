import React from "react"
import "./_previous.scss"
import ScrollAnimation from "react-animate-on-scroll"

const Previous = (
  {
    title,
    items,
  }) => {
  return (

    <div className="container">
      <section className="previous" id="previous">
        <h2>{title}</h2>
        <div className="previous__grid">
          {items.map((item, i) => {
            const itemEl = item.elements
            const url = itemEl.previous_session_url.value
            const color = itemEl.previous_session_color.value[0].codename
            const image = itemEl.previous_session_image.value[0].url
            const imageAlt = itemEl.previous_session_image.value[0].description
            const title = itemEl.previous_session_title.value
            const name = itemEl.previous_session_name.value

            return (
              <a href={url} key={i} target="_blank" rel="noopener noreferrer" className={`previous__card ${color}`}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                  <img src={image} alt={imageAlt}/>
                  <span className="previous__content">
                  <h3>{title}</h3>
                <span>{name}</span>
                </span>
                </ScrollAnimation>
              </a>
            )
          })
          }
        </div>
      </section>
    </div>
  )
}

export default Previous