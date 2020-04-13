import React from "react"
import { Badge } from "reactstrap"

const renderCategoryNodes = (nodes, title) => (
  <div>
    {nodes.map((term, i) => (
      <Badge
        key={term.id}
        color="primary"
        pill
        className={i !== 0 ? `ml-2` : null}
        dangerouslySetInnerHTML={{ __html: term.name }}
      />
    ))}
  </div>
)

export const renderCategories = (categoryNodes = []) => (
  <>{categoryNodes ? renderCategoryNodes(categoryNodes) : null}</>
)
