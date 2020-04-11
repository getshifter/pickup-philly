import React from "react"

export const renderMetaTitle = (title = "") =>
  title ? <p className="small font-weight-bold">{title}</p> : null
