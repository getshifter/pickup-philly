import React from "react"
import { Col } from "reactstrap"
import { commaList } from "./comma-list"
import { renderMetaTitle } from "./title"
const renderPaymentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderPayment = (paymentNodes = []) => (
  <>
    {paymentNodes ? (
      <Col>
        <section className="font-weight-bold">
          {renderMetaTitle("Payment")}
          {renderPaymentNodes(paymentNodes)}
        </section>
      </Col>
    ) : null}
  </>
)
