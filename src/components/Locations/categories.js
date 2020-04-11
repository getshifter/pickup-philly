import React from "react"
import { Badge } from "reactstrap"

const renderCategoryNodes = (nodes, title) => (
  <div>
    {console.log(nodes)}
    {nodes.map(term => (
      <Badge key={term.id} color="primary" pill>
        {term.name}
      </Badge>
    ))}
  </div>
)

export const renderCategories = (categoryNodes = []) => (
  <>{categoryNodes ? renderCategoryNodes(categoryNodes) : null}</>
)
