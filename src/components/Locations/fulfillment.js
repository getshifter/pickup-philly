import React from "react"

const renderFulfillmentNodes = (nodes, title) => (
  <div>
    {nodes.map(option => (
      <span>
        {option}
        {`, `}
      </span>
    ))}
  </div>
)

export const renderFulfillment = (fulfillmentNodes = []) => (
  <>{fulfillmentNodes ? renderFulfillmentNodes(fulfillmentNodes) : null}</>
)