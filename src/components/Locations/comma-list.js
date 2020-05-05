import React from "react"
export const commaList = nodes => {
  return (
    <span>
      {nodes.map((option, i) => (
        <span key={i}>
          {i !== 0 ? `, ` : null}
          {option}
        </span>
      ))}
    </span>
  )
}
