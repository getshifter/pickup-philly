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
  algoliaAdminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
}

module.exports = { config }

console.log(
  config,
  process.env.NODE_ENV,
  process.env.GATSBY_ACTIVE_ENV,
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_WORDPRESS_GRAPHQL_URL
)

module.exports = {
  siteMetadata: {
    title: "Pickup Philly",
    description: "",
    author: "@pickupphilly",
    siteUrl: "https://www.pickupphilly.com",
    wordPressUrl: config.wordPressUrl,
    wordPressGraphQlUrl: config.wordPressGraphQlUrl,
    twitterImage: "/twitter-image.png",
    ogImage: "/og-image.png",
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
        appId: `XJQYEHQUP4`,
        apiKey: `00ad2b04cb944b2a33befad5e4ac802e`,
        indexName: `locations`,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
}
