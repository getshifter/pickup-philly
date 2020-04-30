import React from "react"
import { commaList } from "./comma-list"
import { renderMetaTitle } from "./title"
import { renderReportInfo } from "./report-info"
import { Col } from "reactstrap"

const renderFulfillmentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderFulfillment = (fulfillmentNodes = [], title = "") => (
  <Col className="pl-0">
    <section>
      {renderMetaTitle("Fulfillment")}
      {fulfillmentNodes ? (
        <div className="font-weight-bold">
          {renderFulfillmentNodes(fulfillmentNodes)}
        </div>
      ) : (
        renderReportInfo(title)
      )}
    </section>
  </Col>
)
