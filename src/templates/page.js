import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import SiteLayout from "../components/SiteLayout"
import Seo from "../components/Seo"

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  return (
    <SiteLayout location={location}>
      <Seo title={`${page.title}`} />
      <Row>
        <Col>
          <h1>{title}</h1>
          <Row>
            <Col>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </SiteLayout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
