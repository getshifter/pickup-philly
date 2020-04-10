import React from "react"
import PropTypes from "prop-types"
import Header from "./SiteHeader"
import { Container, Row, Col } from "reactstrap"
import "./style.css"

const SiteLayout = ({ children, location }) => (
  <div>
    <Header location={location} />
    <Row>
      <Col>{children}</Col>
    </Row>
    <footer>© {new Date().getFullYear()}</footer>
  </div>
)

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SiteLayout
