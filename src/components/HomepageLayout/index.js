import React from "react"
import SiteHeader from "../../components/SiteHeader"
import { Row, Col } from "reactstrap"

const HomepageLayout = ({ location, children }) => (
  <div>
    <SiteHeader location={location} />
    <Row>
      <Col>{children}</Col>
    </Row>
  </div>
)

export default HomepageLayout
