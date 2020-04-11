import React from "react"

export const renderMetaTitle = (title = "") =>
  title ? <p className="small gray-500">{title}</p> : null
