import React from "react"
import { Badge } from "reactstrap"

const renderCategoryNodes = (nodes, title) => (
  <div>
    {nodes.map(term => (
      <Badge color="primary" pill>
        {term.name}
      </Badge>
    ))}
  </div>
)

export const renderCategories = (categoryNodes = []) => (
  <>{categoryNodes ? renderCategoryNodes(categoryNodes) : null}</>
)
