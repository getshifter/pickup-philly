import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Col,
  Row,
} from "reactstrap"
// import SiteMenu from "../SiteMenu"

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
      <header className="bg-light">
        <Container fluid>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Pickup Philly</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink as={Link} to="/about/" className="display-3">
                      About
                    </NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
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
