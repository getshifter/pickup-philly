import React from "react"
import Search from "../search"

const Locations = props => {
  const locations = props.data.wpgraphql.locations.nodes

  return (
    <>
      <div className="position-relative list-wrapper">
        <div className="list-container pt-4">
          <Search data={locations} />
        </div>
      </div>
    </>
  )
}

export default Locations