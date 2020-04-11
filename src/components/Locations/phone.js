import React from "react"
import { Col } from "reactstrap"
export const renderPhone = (telephone = "") =>
  telephone ? (
    <Col>
      <a href={telephone.getNumber()}>{telephone.getNumber()}</a>
    </Col>
  ) : null
