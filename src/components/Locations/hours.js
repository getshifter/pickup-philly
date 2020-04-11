import React from "react"
import { Col } from "reactstrap"
import { renderMetaTitle } from "./title"
import { renderReportInfo } from "./report-info"

export const renderHours = (hours = "") => (
  <Col>
    <section className="font-weight-bold">
      {renderMetaTitle("Hours")}
      {hours ? (
        <div dangerouslySetInnerHTML={{ __html: hours }} />
      ) : (
        renderReportInfo()
      )}
    </section>
  </Col>
)
