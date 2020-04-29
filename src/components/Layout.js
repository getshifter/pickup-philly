import React from "react"
import { Container } from "reactstrap"
import "../assets/styles/scss/main.scss"

const Layout = ({ primaryContent, secondaryContent, location }) => (
  <Container fluid className="layout-wrapper">
    {primaryContent}
  </Container>
)

export default Layout
