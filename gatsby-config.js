const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

const config = {
  wordPressUrl:
    activeEnv === 'production'
      ? 'https://9e99c91f-7ecf-4aa1-b77a-d18005cf4139.app.getshifter.io:24326/'
      : 'https://9e99c91f-7ecf-4aa1-b77a-d18005cf4139.app.getshifter.io:24326/',
  wordPressGraphQlUrl:
    activeEnv === 'production'
      ? 'https://9e99c91f-7ecf-4aa1-b77a-d18005cf4139.app.getshifter.io:24326/graphql/'
      : 'https://9e99c91f-7ecf-4aa1-b77a-d18005cf4139.app.getshifter.io:24326/graphql/',
};

module.exports = { config };

module.exports = {
  siteMetadata: {
    title: 'Shifter',
    description: 'The static site generator for WordPress.',
    author: '@getshifter',
    siteUrl: 'https://www.pickupphilly.com',
    wordPressUrl: config.wordPressUrl,
    wordPressGraphQlUrl: config.wordPressGraphQlUrl,
    twitterImage: '/twitter-image.png',
    ogImage: '/og-image.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: config.wordPressGraphQlUrl,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        cropFocus: 'CENTER',
        toFormat: 'WEBP',
        pngCompressionSpeed: 10,
        defaultQuality: 90,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'shifter-website',
        short_name: 'shifter',
        start_url: '/',
        background_color: '#f0f2f5',
        theme_color: '#001529',
        display: 'minimal-ui',
        icon: 'src/images/shifter-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
  ],
};