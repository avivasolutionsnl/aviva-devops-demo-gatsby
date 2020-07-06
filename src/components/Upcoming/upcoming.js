import React from "react"
import Session from "./session"
import "./_upcoming.scss"

const Upcoming = (
  {
    title,
    date,
    sessions,
  }) => {
  return (
    <div className="container">
      <section className="upcoming" id="nextsession">
        <div className="upcoming__intro">
          <h2>{title}</h2>
          <span>{date}</span>
        </div>


        <div className="upcoming__grid">
          {sessions.map((item) => {
            return (
              <div className="session__wrapper" key={item.id}>
                <Session item={item}/>
              </div>
            )
          })}
        </div>

      </section>
    </div>
  )
}

export default Upcoming