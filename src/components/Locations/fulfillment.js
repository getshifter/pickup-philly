import React from "react"
import { commaList } from "./comma-list"
import { renderMetaTitle } from "./title"
import { renderReportInfo } from "./report-info"
import { Col } from "reactstrap"

const renderFulfillmentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderFulfillment = (fulfillmentNodes = [], title = "") => (
    <div>
     Fulfillment
      {fulfillmentNodes ? (
        <span className="font-weight-bold">
          {renderFulfillmentNodes(fulfillmentNodes)}
        </span>
      ) : (
        renderReportInfo(title)
      )}
    </div>
)
