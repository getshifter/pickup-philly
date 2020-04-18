import React from "react"
import Helmet from "react-helmet"
import { Container, Row, Col } from "reactstrap"
import "../assets/styles/scss/main.scss"

const Layout = ({ primaryContent, secondaryContent, location }) => (
  <div>
    <Helmet />
    <Container fluid className="layout-wrapper">
      {primaryContent}
    </Container>
  </div>
)

export default Layout
