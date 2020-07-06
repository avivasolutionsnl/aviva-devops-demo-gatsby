import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "./_navigation.scss"

const Header = ({ data }) => {
  const page = data.allKontentItemHomepage.nodes[0].elements
  const meetupUrl = page.meetup_url.value

  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li><a href="#nextsession">Next Session</a></li>
            <li><a href="#why">Waarom Komen</a></li>
            <li><a href="#about">Over Aviva Solutions</a></li>
            <li><a href="#previous">Vorige Events</a></li>
          </ul>
          <a href={meetupUrl} target="_blank" rel="noopener noreferrer" className="button button--red">Meld je gratis aan</a>
        </nav>
      </div>
    </header>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query meetup {
  allKontentItemHomepage(filter: {system: {codename: {eq: "homepage"}}}) {
    nodes {
      elements {
        meetup_url {
          value
        }
      }
    }
  }
}
    `}
    render={data => <Header data={data} {...props} />}
  />
);

