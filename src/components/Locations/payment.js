import React from "react"

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

export const renderPayment = (paymentNodes = []) => (
  <>{paymentNodes ? renderPaymentNodes(paymentNodes) : null}</>
)
