import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/Layout"
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
    <Layout location={location}>
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
    </Layout>
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
