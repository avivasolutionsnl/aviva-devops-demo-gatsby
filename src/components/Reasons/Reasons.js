import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./_reasons.scss"
import ScrollAnimation from "react-animate-on-scroll"

const Reasons = (
  {
    title,
    reasons,
    meetup,
  }) => {

  return (
    <section className="reasons" id="why">
      <div className="container">
        <h2>{title}</h2>

        <div className="reasons__grid">
          {reasons.map((item) => {
            const icon = item.elements.fontawesome_id.value
            const title = item.elements.reason_title.value
            const text = item.elements.reason_text.value

            return (
              <div className="reasons__item" key={item.id}>
                <FontAwesomeIcon icon={[`far`, icon]} size="2x"/>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            )
          })}
        </div>

        <ScrollAnimation animateIn="tada">
          <div className="reasons__button">
            <a href={meetup} target="_blank" rel="noopener noreferrer" className="button button--green">Meld je gratis
              aan</a>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  )
}

export default Reasons