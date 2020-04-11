import React from "react"

export const renderPhone = (telephone = "") =>
  telephone ? <a href={telephone.getNumber()}>{telephone.getNumber()}</a> : null
