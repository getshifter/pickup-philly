import React from "react"
import { Badge } from "reactstrap"

const renderCategoryNodes = (nodes, title) => (
  <div>
    {nodes.map(term => (
      <Badge color="primary" pill className="mr-2">
        {term.name}
      </Badge>
    ))}
  </div>
)

export const renderCategories = (categoryNodes = []) => (
  <>{categoryNodes ? renderCategoryNodes(categoryNodes) : null}</>
)
