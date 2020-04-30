import React from "react"
import PropTypes from "prop-types"
import PhoneNumber from "awesome-phonenumber"
import { Card, CardBody, UncontrolledCollapse, Button, Row, Col } from "reactstrap"
import { renderCategories } from "./categories"
import { renderIcon } from "./icon"
import { renderOrdering } from "./ordering"
import { renderFulfillment } from "./fulfillment"
import { renderPayment } from "./payment"
import { renderPhone } from "./phone"
import { renderHours } from "./hours"
import { renderWebsite } from "./website"
import { renderAdditionalInfo } from "./additional-info"
import { renderEmployeeRelief } from "./employee-relief"

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
    employeeReliefFund,
  } = acf_location
  const id = `id_` + databaseId
  const telephone = phone ? new PhoneNumber(phone, "US") : null

  return (
    <article>
      <Card className="mb-3">
        <CardBody className="p-0">
          <div className="p-4">
            <Row>
              <Col>
            <h2
              className="display-3"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="mt-2 mb-4">
              {renderCategories(categories.nodes)}
            </div>
            </Col>
            <Col sm="4" className="text-right">
            <Row>
              {renderWebsite(website)}
              </Row>
              <Row>
              {renderPhone(telephone)}
            </Row>
            </Col>
            </Row>
            <Row>
            <Col>
              {renderFulfillment(fulfillmentOptions, title)}
              </Col>
              <Col>
              {renderOrdering(orderingOptions, title)}
            </Col>
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
                {renderPayment(paymentOptions, title)}
                {renderHours(hours, title)}
              </Row>
              {renderAdditionalInfo(availabilityNotes)}
              {renderEmployeeRelief(employeeReliefFund)}
            </div>
          </UncontrolledCollapse>
        </CardBody>
      </Card>
    </article>
  )
}

export default LocationCard

LocationCard.propTypes = {
  data: PropTypes.object,
}

LocationCard.defaultProps = {
  data: null,
}
