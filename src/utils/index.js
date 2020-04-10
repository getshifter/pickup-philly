import config from '../../gatsby-config'

export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url ? url.replace(config.siteMetadata.wordPressUrl, ``) : url
}