import React from "react"
import PropTypes from "prop-types"
import Url from "url-parse"
import PhoneNumber from "awesome-phonenumber"
import {
  Card,
  CardBody,
  CardFooter,
  Badge,
  UncontrolledCollapse,
  Button,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap"
import { Phone, Globe, ChevronDown } from "@styled-icons/feather"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title, acf_location, categories, slug } = props.data
  const {
    fulfillmentOptions,
    orderingOptions,
    paymentOptions,
    website,
    hours,
    phone,
    availabilityNotes,
  } = acf_location
  const url = Url(website)
  const urlParsed = url.host ? url.host : null
  const telephone = new PhoneNumber(phone, "US")

  console.log(acf_location)

  const renderIcon = icon => {
    console.log(icon)
    switch (icon) {
      case "online":
        icon = (
          <>
            <Globe size="1rem" id={icon} />
            <UncontrolledTooltip target={icon}>
              Order Online
            </UncontrolledTooltip>
          </>
        )
        break
      case "phone":
        icon = (
          <>
            <Phone size="1rem" id={icon} />
            <UncontrolledTooltip target={icon}>
              Order by Phone
            </UncontrolledTooltip>
          </>
        )
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
        <span>
          {option}
          {`, `}
        </span>
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

  const renderPaymentNodes = (nodes, title) => (
    <div>
      {nodes.map(option => (
        <span>
          {option}
          {`, `}
        </span>
      ))}
    </div>
  )

  const renderPayment = (paymentNodes = []) => (
    <>{paymentNodes ? renderPaymentNodes(paymentNodes) : null}</>
  )

  const renderMetaTitle = (title = "") =>
    title ? <p className="small font-weight-bold">{title}</p> : null

  return (
    <section>
      <Card>
        <CardBody>
          <h2 className="h5" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="mb-3">{renderTerms(categories.nodes)}</div>
          <Row className="d-flex justify-content-between mb-4">
            <Col>
              <a href={website}>{urlParsed}</a>
            </Col>
            <Col>{renderOrdering(orderingOptions)}</Col>
          </Row>
          <Row className="d-flex justify-content-between mb-4">
            <Col>
              <a href={telephone.getNumber()}>{telephone.getNumber()}</a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <section>
                {renderMetaTitle("Payment")}
                <div>{renderPayment(paymentOptions)}</div>
              </section>
            </Col>
            <Col>
              <section>
                {renderMetaTitle("Fulfillment")}
                <div>{renderFulfillment(fulfillmentOptions)}</div>
              </section>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <div className="text-right">
            <Button color="link" id={slug}>
              More Info <ChevronDown size="1rem" />
            </Button>
          </div>
          <UncontrolledCollapse toggler={`#${slug}`}>
            <div>
              <hr />
              <Row className="mb-4">
                <Col>
                  <section>
                    {renderMetaTitle("Hours")}
                    <div dangerouslySetInnerHTML={{ __html: hours }} />
                  </section>
                </Col>
                <Col>
                  <section>
                    {renderMetaTitle("Additional Info")}
                    <div
                      dangerouslySetInnerHTML={{ __html: availabilityNotes }}
                    />
                  </section>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <section>
                    {renderMetaTitle("Payment")}
                    <div>{renderFulfillment(fulfillmentOptions)}</div>
                  </section>
                </Col>
                <Col>
                  <section>
                    {renderMetaTitle("Fulfillment")}
                    <div>{renderFulfillment(fulfillmentOptions)}</div>
                  </section>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <section>
                    {renderMetaTitle("Employee Relief Fund")}
                    <div
                      dangerouslySetInnerHTML={{ __html: availabilityNotes }}
                    />
                  </section>
                </Col>
              </Row>
            </div>
          </UncontrolledCollapse>
        </CardFooter>
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
