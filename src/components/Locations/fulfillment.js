import React from "react"
import { commaList } from "./comma-list"

const renderFulfillmentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderFulfillment = (fulfillmentNodes = []) => (
  <>{fulfillmentNodes ? renderFulfillmentNodes(fulfillmentNodes) : null}</>
)
