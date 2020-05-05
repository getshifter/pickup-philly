require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const queries = require("./src/utils/algolia")
const nodeEnv = process.env.NODE_ENV
const gatsbyEnv = process.env.GATSBY_ACTIVE_ENV
const activeEnv = gatsbyEnv || nodeEnv || "development"

const config = {
  wordPressUrl: process.env.GATSBY_WORDPRESS_URL,
  wordPressGraphQlUrl: process.env.GATSBY_WORDPRESS_GRAPHQL_URL,
  algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
  algoliaIndexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
}

module.exports = { config }

module.exports = {
  siteMetadata: {
    title: "Pickup Philly",
    description:
      "Pickup Philly is an open source business directory to help connect essential services with their customers during the coronavirus outbreak, including information on how to shop, modified hours of operation, and more.",
    author: "@pickupphilly",
    siteUrl: "https://www.pickupphilly.com",
    wordPressUrl: config.wordPressUrl,
    wordPressGraphQlUrl: config.wordPressGraphQlUrl,
    shareImage: "/share-image.png",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "WPGraphQL",
        fieldName: "wpgraphql",
        url: config.wordPressGraphQlUrl,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        cropFocus: "CENTER",
        toFormat: "WEBP",
        pngCompressionSpeed: 10,
        defaultQuality: 90,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Pickup Philly",
        short_name: "Pickup Philly",
        start_url: "/",
        background_color: "#f0f2f5",
        theme_color: "#001529",
        display: "minimal-ui",
        icon: "src/images/pickupphilly-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "jwp0mrl",
        },
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164971508-1",
      },
    },
  ],
}
