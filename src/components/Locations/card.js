import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardHeader, CardFooter } from "reactstrap"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title, acf_location } = props.data
  const { fulfillmentOptions, website } = acf_location

  console.log(fulfillmentOptions)

  return (
    <section>
      <Card>
        <CardHeader dangerouslySetInnerHTML={{ __html: title }} />
        <CardBody>{/* <a href={website}>{website}</a> */}</CardBody>
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
