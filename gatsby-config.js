const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = {
  wordPressUrl:
    activeEnv === "production"
      ? `REPLACE_SHIFTER_URL/`
      : process.env.GATSBY_WORDPRESS_URL,
  wordPressGraphQlUrl:
    activeEnv === "production"
      ? `REPLACE_SHIFTER_URL/graphql/`
      : process.env.GATSBY_WORDPRESS_GRAPHQL_URL,
}

module.exports = { config }

module.exports = {
  siteMetadata: {
    title: `Pickup Philly`,
    description: `A business directory built on the JAMstack.`,
    author: `@pickupphilly`,
    wordPressUrl: config.wordPressUrl,
    wordPressGraphQlUrl: config.wordPressGraphQlUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        url: config.wordPressGraphQlUrl,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f80759`,
        theme_color: `#f80759`,
        display: `minimal-ui`,
        icon: `src/images/shifter-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
