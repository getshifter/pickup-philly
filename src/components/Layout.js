import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import { Container, Row, Col } from "reactstrap"

const Layout = ({ children, location }) => (
  <div>
    <Header location={location} />
    <Row>
      <Col>{children}</Col>
    </Row>
    <footer>© {new Date().getFullYear()}</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
