import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Layout } from "antd"
import SiteMenu from "../SiteMenu"
import wpgraphqlLogo from "../../images/wpgraphql-logo.png"
import shifterLogo from "../../images/shifter-logo.png"
import gatsbyLogo from "../../images/gatsby-logo.png"
import netlifyLogo from "../../images/netlify-logo.png"
import githubLogo from "../../images/github-logo--white.png"
import wordpressLogo from "../../images/wordpress-logo.png"

const { Header } = Layout

const Index = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header>
        <div
          className="logo"
          style={{
            minWidth: `120px`,
            minHeight: `31px`,
            lineHeight: `31px`,
            margin: `16px 24px 16px 0`,
            float: `left`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              src={shifterLogo}
              alt="WPGraphQL Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
            <img
              src={gatsbyLogo}
              alt="Gatsby Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
            <img
              src={githubLogo}
              alt="GitHub Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
            <img
              src={wordpressLogo}
              alt="WordPress Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
            <img
              src={wpgraphqlLogo}
              alt="WPGraphQL Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
             <img
              src={netlifyLogo}
              alt="Netlify Logo"
              style={{ height: `30px`, width: `auto`, marginRight: `1rem` }}
            />
            {` `}
            {data.site.siteMetadata.title}
          </Link>
        </div>
        <SiteMenu location={location} />
      </Header>
    )}
  />
)

Index.propTypes = {
  siteTitle: PropTypes.string,
}

Index.defaultProps = {
  siteTitle: ``,
}

export default Index
