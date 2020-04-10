import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody } from "reactstrap"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title } = props.data

  return (
    <section>
      <Card>
        <CardBody>{title}</CardBody>
      </Card>
    </section>
  )
}

export default LocationCard

LocationCard.propTypes = {
  data: PropTypes.object,
}

LocationCard.defaultProps = {
  data: null,
}
