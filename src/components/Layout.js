import React from "react"
import Helmet from "react-helmet"
import Header from "./Header/Header"
import { Container, Row, Col } from "reactstrap"
import "../assets/styles/scss/main.scss"

const Layout = ({ primaryContent, secondaryContent, location }) => (
  <div>
    <Helmet
      bodyAttributes={
        {
          // class: "h-100",
        }
      }
      htmlAttributes={
        {
          // class: "h-100",
        }
      }
    />
    <Container fluid className="layout-wrapper">
      <Row>
        <Col md="7" className="d-none d-md-block">
          <div className="bg-dark">{primaryContent}</div>
        </Col>
        <Col md="5">
          <Header location={location} />
          {secondaryContent}
        </Col>
      </Row>
    </Container>
  </div>
)

export default Layout
