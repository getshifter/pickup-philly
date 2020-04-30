import React from "react"
export const commaList = nodes => {
  return (
    <span>
      {nodes.map((option, i) => (
        <span key={i}>
          {i !== 0 ? `, ` : null}
          {option == 'curbside' ? 'Contactless curbside pickup' : null }
          {option == 'delivery' ? 'Door-to-door Delivery' : null }
          {option == 'phone' ? 'Phone' : null }
          {option == 'app' ? 'App' : null }
          {option == 'online' ? 'Online' : null }
        </span>
      ))}
    </span>
  )
}
