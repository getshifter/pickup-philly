import React from "react"
import { Col, Row } from "reactstrap"
import { renderMetaTitle } from "./title"

export const renderAdditionalInfo = (availabilityNotes = "") => {
  return availabilityNotes ? (
    <Row className="mb-4">
      <Col>
        <section>
          {renderMetaTitle("Additional Info")}
          <div dangerouslySetInnerHTML={{ __html: availabilityNotes }} />
        </section>
      </Col>
    </Row>
  ) : null
}
