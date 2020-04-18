import React from "react"
import Helmet from "react-helmet"
import { Container } from "reactstrap"
import "../assets/styles/scss/main.scss"

const Layout = ({ primaryContent, secondaryContent, location }) => (
  <>
    <Helmet />
    <Container fluid className="layout-wrapper">
      {primaryContent}
    </Container>
  </>
)

export default Layout
