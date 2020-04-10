import React from "react"
import PropTypes from "prop-types"
import Url from 'url-parse';
import { Card, CardBody, CardHeader, CardFooter, Badge } from "reactstrap"
import { Phone, Globe } from "@styled-icons/feather"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title, acf_location, categories } = props.data
  const { fulfillmentOptions, orderingOptions, website } = acf_location
  const url = Url(website);
  const urlParsed = url.host ? url.host : null;

  console.log(fulfillmentOptions)

  const renderIcon = icon => {
    console.log(icon)
    switch (icon) {
      case "online":
        icon = <Globe size="1rem" />
        break
      case "phone":
        icon = <Phone size="1rem" />
        break
      default:
        icon = null
    }

    return icon
  }

  const renderOrderingNodes = (nodes, title) => (
    <div>
      Order:
      {nodes.map(option => (
        <span className="ml-2 text-green">{renderIcon(option)}</span>
      ))}
    </div>
  )

  const renderOrdering = (orderingNodes = []) => (
    <>{orderingNodes ? renderOrderingNodes(orderingNodes) : null}</>
  )

  const renderFulfillmentNodes = (nodes, title) => (
    <div>
      {nodes.map(option => (
        <span>{option}</span>
      ))}
    </div>
  )

  const renderFulfillment = (fulfillmentNodes = []) => (
    <>{fulfillmentNodes ? renderFulfillmentNodes(fulfillmentNodes) : null}</>
  )

  const renderCategoryNodes = (nodes, title) => (
    <div>
      {nodes.map(term => (
        <Badge color="primary" pill>
          {term.name}
        </Badge>
      ))}
    </div>
  )

  const renderTerms = (categoryNodes = []) => (
    <>{categoryNodes ? renderCategoryNodes(categoryNodes) : null}</>
  )

  return (
    <section>
      <Card>
        <CardHeader dangerouslySetInnerHTML={{ __html: title }} />
        <CardBody>
          <div>{renderTerms(categories.nodes)}</div>
          <div className="d-flex justify-content-between">
            <a href={website}>{urlParsed}</a>
            <div>{renderOrdering(orderingOptions)}</div>

            {/* <div>{renderFulfillment(fulfillmentOptions)}</div> */}
          </div>
        </CardBody>
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
