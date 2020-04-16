import React from "react"

export const renderReportInfo = title => {
  const formURL = `https://docs.google.com/forms/d/e/1FAIpQLSdAMspEfX9xsS_ZVf-Y2TwgQMP6FuiK4u2CpksJjzyVf2U39w/viewform`
  const titleField = `entry.1695594285`
  const params = title ? `?` + titleField + `=` + encodeURI(title) : ``
  const url = formURL + params
  return (
    <div className="text-muted">
      Unavailable,{" "}
      <a target="_blank" rel="noopener noreferrer" href={url}>
        help us improve this
      </a>
      .
    </div>
  )
}
