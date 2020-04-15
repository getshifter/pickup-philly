import React from "react"
export const commaList = nodes => {
  return (
    <div>
      {nodes.map((option, i) => (
        <span key={i}>
          {i !== 0 ? `, ` : null}
          {option}
        </span>
      ))}
    </div>
  )
}
