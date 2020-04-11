import React from "react"
import { renderIcon } from "./icon"

const renderOrderingNodes = (nodes, title) => {
  return (
    <div>
      Order by:
      {nodes.map((option, i) => {
        return <span key={i} className={`pl-2 text-green`}>{renderIcon(option)}</span>
      })}
    </div>
  )
}

export const renderOrdering = (orderingNodes = []) => (
  <>{orderingNodes ? renderOrderingNodes(orderingNodes) : null}</>
)
