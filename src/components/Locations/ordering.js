import React from "react"
import { renderIcon } from "./icon"

const renderOrderingNodes = (nodes, title) => (
  <div>
    Order by:
    {nodes.map(option => (
      <span className="ml-2 text-green">{renderIcon(option)}</span>
    ))}
  </div>
)

export const renderOrdering = (orderingNodes = []) => (
  <>{orderingNodes ? renderOrderingNodes(orderingNodes) : null}</>
)
