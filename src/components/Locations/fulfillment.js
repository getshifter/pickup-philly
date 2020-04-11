import React from "react"
import { commaList } from "./comma-list"
import { renderMetaTitle } from "./title"
import { Col } from "reactstrap"

const renderFulfillmentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderFulfillment = (fulfillmentNodes = []) => (
  <>
    {fulfillmentNodes ? (
      <Col>
        <section>
          {renderMetaTitle("Fulfillment")}
          <div className="font-weight-bold">
            {renderFulfillmentNodes(fulfillmentNodes)}
          </div>
        </section>
      </Col>
    ) : null}
  </>
)
