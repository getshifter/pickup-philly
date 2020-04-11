import React from "react"
import { Col } from "reactstrap"
import { renderMetaTitle } from "./title"

export const renderHours = (hours = "") => (
  <>
    {hours ? (
      <Col>
        <section>
          {renderMetaTitle("Hours")}
          <div
            className="font-weight-bold"
            dangerouslySetInnerHTML={{ __html: hours }}
          />
        </section>
      </Col>
    ) : null}
  </>
)
