import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import { Container, Row, Col } from "reactstrap"
import "../assets/styles/scss/main.scss"

const Layout = ({ children, primaryContent, secondaryContent, location }) => (
  <div>
    <Header location={location} />
    <Container>
      <Row>
        <Col>{primaryContent}</Col>
        <Col>{secondaryContent}</Col>
      </Row>
    </Container>
    <footer>© {new Date().getFullYear()}</footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
