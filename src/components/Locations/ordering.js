import React from "react"
import { renderIcon } from "./icon"
import { Col } from "reactstrap"

const renderOrderingNodes = (nodes, title) => (
  <>
    {nodes.length > 0 ? (
      <div>
        Order by:
        {nodes.map((option, i) => {
          return (
            <span key={i} className={`pl-2 text-green`}>
              {renderIcon(option)}
            </span>
          )
        })}
      </div>
    ) : null}
  </>
)

export const renderOrdering = (orderingNodes = []) => (
  <>{orderingNodes ? <Col>{renderOrderingNodes(orderingNodes)}</Col> : null}</>
)
