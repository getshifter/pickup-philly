import React from "react"
import PropTypes from "prop-types"
import Url from "url-parse"
import PhoneNumber from "awesome-phonenumber"
import {
  Card,
  CardBody,
  UncontrolledCollapse,
  Button,
  Col,
  Row,
} from "reactstrap"
import { renderCategories } from "./categories"
import { renderIcon } from "./icon"
import { renderOrdering } from "./ordering"
import { renderFulfillment } from "./fulfillment"

const LocationCard = props => {
  if (props.data === null) {
    return null
  }

  const { title, databaseId, acf_location, categories } = props.data
  const {
    fulfillmentOptions,
    orderingOptions,
    paymentOptions,
    website,
    hours,
    phone,
    availabilityNotes,
  } = acf_location
  const id = `id_` + databaseId
  const url = Url(website)
  const urlParsed = url.host ? url.host : null
  const telephone = phone ? new PhoneNumber(phone, "US") : null

  console.log(acf_location)

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

  const renderPhone = (telephone = "") =>
    telephone ? (
      <a href={telephone.getNumber()}>{telephone.getNumber()}</a>
    ) : null

  return (
    <section>
      <Card>
        <CardBody className="p-0">
          <div className="p-4">
            <h2 className="h5" dangerouslySetInnerHTML={{ __html: title }} />
            <div className="mb-3">{renderCategories(categories.nodes)}</div>
            <Row className="d-flex justify-content-between mb-4">
              <Col>
                <a href={website}>{urlParsed}</a>
              </Col>
              <Col>{renderPhone(telephone)}</Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <section>
                  {renderMetaTitle("Fulfillment")}
                  <div>{renderFulfillment(fulfillmentOptions)}</div>
                </section>
              </Col>
              <Col>{renderOrdering(orderingOptions)}</Col>
            </Row>
          </div>
          <div className="text-right border-top">
            <Button color="link" id={id}>
              More Info {renderIcon("chevron-down")}
            </Button>
          </div>
          <UncontrolledCollapse toggler={`${id}`}>
            <div className="p-4">
              <Row className="mb-4">
                <Col>
                  <section>
                    {renderMetaTitle("Payment")}
                    <div>{renderPayment(paymentOptions)}</div>
                  </section>
                </Col>
                <Col>
                  <section>
                    {renderMetaTitle("Hours")}
                    <div dangerouslySetInnerHTML={{ __html: hours }} />
                  </section>
                </Col>
              </Row>
              <Row className="mb-4">
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
                    {renderIcon("heart")}{" "}
                    {renderMetaTitle("Employee Relief Fund")}
                    <div
                      dangerouslySetInnerHTML={{ __html: availabilityNotes }}
                    />
                  </section>
                </Col>
              </Row>
            </div>
          </UncontrolledCollapse>
        </CardBody>
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
