import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import SiteLayout from "../components/SiteLayout"
import PostEntryMeta from "../components/PostEntryMeta"
import Seo from "../components/Seo"

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      term.name
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <Fragment>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null }
  </Fragment>
)

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post },
    },
  } = props
  const { title, content } = post
  return (
    <SiteLayout location={location}>
      <Seo title={`${post.title}`} />
      <Row>
        <Col>
          <h1>{title}</h1>
          <Row>
            <Col>
              <PostEntryMeta post={post} />
            </Col>
          </Row>
        </Col>
      </Row>
    </SiteLayout>
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        author {
          name
          slug
          avatar {
            url
          }
        }
        tags {
          nodes {
            name
            link
          }
        }
        categories {
          nodes {
            name
            link
          }
        }
      }
    }
  }
`
