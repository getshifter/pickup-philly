const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`

const config = {
  wordPressUrl:
    activeEnv === "production"
      ? `REPLACE_SHIFTER_URL/`
      : `https://127.0.0.1:8443/`,
  wordPressGraphQlUrl:
    activeEnv === "production"
      ? `REPLACE_SHIFTER_URL/graphql/`
      : `https://127.0.0.1:8443/graphql/`,
}

module.exports = { config }

module.exports = {
  siteMetadata: {
    title: `Shifter + Gatsby + GitHub Actions`,
    description: `Example site using Shifter, WordPress, WPGraphQL, Gatsby, Netlify, and GitHub Actions.`,
    author: `@getshifter`,
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
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "layout-header-background": `#0e2339`,
          "primary-color": `#1890ff`,
          "link-color": `#1890ff`,
          "success-color": `#52c41a`,
          "warning-color": `#faad14`,
          "error-color": `#f5222d`,
          "font-size-base": `16px`,
          "heading-color": `rgba(0, 0, 0, .85)`,
          "text-color": `rgba(0, 0, 0, .65)`,
          "text-color-secondary": `rgba(0, 0, 0, .45)`,
          "disabled-color": `rgba(0, 0, 0, .25)`,
          "border-radius-base": `4px`,
          "border-color-base": `#d9d9d9`,
          "box-shadow-base": `0 2px 8px rgba(0, 0, 0, .15)`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-antd`,
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        // url: process.env.SHIFTER_APP_URL + `/graphql/`,
        // url: `https://63239777-0e4c-473c-a1c7-73498363fcf9.app.getshifter.io:23736/graphql/`,
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
