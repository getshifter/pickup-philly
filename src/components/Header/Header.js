import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Navbar, Nav, NavItem } from "reactstrap"
import InfoModal from "./Modal"
// import SiteMenu from "../SiteMenu"

const Index = ({ location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        logo: file(relativePath: { eq: "pickupphilly-logo.png" }) {
          childImageSharp {
            fixed(width: 175) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="bg-light border-bottom sticky-top w-100 z-index-1">
        <Navbar className="py-4 px-0" color="light" light expand="md">
          <Img
            fixed={data.logo.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <InfoModal buttonLabel="About" />
            </NavItem>
          </Nav>
        </Navbar>
      </header>
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
