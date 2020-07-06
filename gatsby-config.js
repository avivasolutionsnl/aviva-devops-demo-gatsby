module.exports = {
  siteMetadata: {
    title: `by Aviva Solutions`,
    description: `Codestof Talks helpen je aan meer context en inzichten waarmee je jouw keuzes, skills en werkwijze als developer verder ontwikkelt.`,
    author: `Aviva Solutions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        deliveryClientConfig: {
          projectId: `51b4d835-66c1-00d7-0fd2-63552d757d08`,
          typeResolvers: [],
        },
        languageCodenames: [
          `default`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `codestof`,
        short_name: `codestof`,
        start_url: `/`,
        background_color: `#2909A5`,
        theme_color: `#2909A5`,
        display: `minimal-ui`,
        icon: `src/assets/images/AvivaSolutions.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
