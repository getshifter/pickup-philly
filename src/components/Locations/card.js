import React from "react"
import PropTypes from "prop-types"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title } = props.data

  return (
    <>
      <div>
        <h4 className="display-4 mb-0">{title}</h4>
      </div>
    </>
  )
}

export default LocationCard

LocationCard.propTypes = {
  data: PropTypes.object,
}

LocationCard.defaultProps = {
  data: null,
}
