import React from "react"
import { Col } from "reactstrap"
import { commaList } from "./comma-list"
import { renderMetaTitle } from "./title"
import { renderReportInfo } from "./report-info"
const renderPaymentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderPayment = (paymentNodes = [], title = "") => (
  <Col>
    <section className="font-weight-bold">
      {renderMetaTitle("Payment")}
      {paymentNodes
        ? renderPaymentNodes(paymentNodes)
        : renderReportInfo(title)}
    </section>
  </Col>
)
