import React from "react"
import { commaList } from "./comma-list"

const renderPaymentNodes = (nodes, title) => {
  return commaList(nodes)
}

export const renderPayment = (paymentNodes = []) => (
  <>{paymentNodes ? renderPaymentNodes(paymentNodes) : null}</>
)
