import React from "react"
import { Col, Row } from "reactstrap"
import { renderMetaTitle } from "./title"
import {renderIcon} from './icon'

export const renderEmployeeRelief = (availabilityNotes = "") => {
  return availabilityNotes ? (
    <Row className="mb-4">
<Col>
  <section>
    {renderIcon("heart")}{" "}
    {renderMetaTitle("Employee Relief Fund")}
    <div
      dangerouslySetInnerHTML={{ __html: availabilityNotes }}
    />
  </section>
</Col>
</Row>
  ) : null
}