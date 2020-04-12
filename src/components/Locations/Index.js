import React from "react"
import LocationCard from "../Locations/card"
import Search from "../search"

const Locations = props => {
  const locations = props.data.wpgraphql.locations.nodes

  return (
    <>
      <div>
        <div className="mb-4 px-3 pt-4">
          <Search />
        </div>
      </div>
      <div className="border-top list-container">
        {locations.map(location => (
          <LocationCard key={location.id} data={location} />
        ))}
      </div>
    </>
  )
}

export default Locations
