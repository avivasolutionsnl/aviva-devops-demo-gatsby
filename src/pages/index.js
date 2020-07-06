import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/hero"
import SEO from "../components/seo"
import Upcoming from "../components/Upcoming/upcoming"
import Reasons from "../components/Reasons/Reasons"
import About from "../components/About/About"
import Previous from "../components/Previous/Previous"

const IndexPage = ({ data }) => {
  const page = data.allKontentItemHomepage.nodes[0].elements
  const meetupUrl = page.meetup_url.value
  const ogImage = page.og_image.value[0].url

  // Hero
  const heroSubtitle = page.hero_subtitle.value
  const heroTitle = page.hero_title.value
  const heroText = page.hero_text.value

  // Upcoming
  const upcomingTitle = page.session_title.value
  const upcomingDate = page.session_date.value
  const upcomingSessions = page.sessions.linked_items

  // Reasons
  const reasonsTitle = page.reasons_title.value
  const reasonsList = page.reasons_list.linked_items

  // About
  const aboutImage = page.about_image.value[0].url
  const aboutImageDescription = page.about_image.value[0].description
  const aboutTitle = page.about_title.value
  const aboutText = page.about_text.value
  const aboutAddress = page.about_address.value
  const aboutURL = page.about_url.value

  // Previous sessions
  const previousTitle = page.previous_title.value
  const previousItems = page.previous_items.linked_items

  return (
    <Layout>
      <SEO
        title="Codestof"
        ogImage={ogImage}
      />

      <div className="background__rectangle">
        <Hero
          subTitle={heroSubtitle}
          title={heroTitle}
          text={heroText}
          meetup={meetupUrl}
        />
        <Upcoming
          title={upcomingTitle}
          date={upcomingDate}
          sessions={upcomingSessions}
        />
      </div>

      <div className="background__rectangle reversed">
        <Reasons
          title={reasonsTitle}
          reasons={reasonsList}
          meetup={meetupUrl}
        />
        <About
          image={aboutImage}
          description={aboutImageDescription}
          title={aboutTitle}
          text={aboutText}
          address={aboutAddress}
          url={aboutURL}
        />
      </div>

      <Previous
        title={previousTitle}
        items={previousItems}
      />

    </Layout>
  )
}

export const query = graphql`
query HomepageQuery {
  allKontentItemHomepage(filter: {system: {codename: {eq: "homepage"}}}) {
    nodes {
      elements {
      og_image {
          value {
            url
          }
        }
        hero_subtitle {
          value
        }
        hero_text {
          value
        }
        hero_title {
          value
        }
        session_date {
          value
        }
        session_title {
          value
        }
        sessions {
          linked_items {
            id
            ... on KontentItemSession {
              id
              elements {
                about {
                  value
                }
                company {
                  value
                }
                first_name {
                  value
                }
                function {
                  value
                }
                last_name {
                  value
                }
                text {
                  resolvedData {
                    html
                  }
                }
                title {
                  value
                }
                color {
                  value {
                    codename
                  }
                }
                image {
                  value {
                    url
                    description
                  }
                }
              }
            }
          }
        }
        reasons_title {
          value
        }
        reasons_list {
          linked_items {
            ... on KontentItemReason {
              id
              elements {
                fontawesome_id {
                  value
                }
                reason_text {
                  value
                }
                reason_title {
                  value
                }
              }
            }
          }
        }
        about_image {
          value {
            url
            description
          }
        }
        about_title {
          value
        }
        about_text {
          value
        }
        about_address {
          value
        }
        meetup_url {
          value
        }
        previous_title {
          value
        }
        previous_items {
          linked_items {
            ... on KontentItemPreviousSessions {
              id
              elements {
                previous_session_color {
                  value {
                    codename
                  }
                }
                previous_session_image {
                  value {
                    url
                    description
                  }
                }
                previous_session_name {
                  value
                }
                previous_session_title {
                  value
                }
                previous_session_url {
                  value
                }
              }
            }
          }
        }
        about_url {
          value
        }
      }
    }
  }
}
`

export default IndexPage
