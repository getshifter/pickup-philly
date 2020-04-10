import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title } = props.data

  return (
    <section>
      <Card>
        <CardHeader dangerouslySetInnerHTML={{__html: title}} />
        <CardBody>body</CardBody>
        <CardFooter>Footer</CardFooter>
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
