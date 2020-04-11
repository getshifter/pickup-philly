import React from "react"
import { Col } from "reactstrap"
import Url from "url-parse"

export const renderWebsite = (website = "") => {
  const url = Url(website)
  const urlParsed = url.host ? url.host : null
  return website ? (
    <Col>
      <a href={website}>{urlParsed}</a>
    </Col>
  ) : null
}
