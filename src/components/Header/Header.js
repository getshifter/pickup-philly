import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Col,
  Row,
} from "reactstrap"
import InfoModal from './Modal'
import logo from "../../images/pickupphilly-logo.png"
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
      <header className="bg-light border-bottom">
        <Container fluid>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className ="my-3"><img src={logo} alt="logo" /></NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <InfoModal buttonLabel="About"/>
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
