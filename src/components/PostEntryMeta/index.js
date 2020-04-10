import React from "react"
import moment from "moment/moment"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"

const PostEntryMeta = ({ post }) => (
  <Row>
    <Col>
      <Link to={`/author/${post.author.slug ? post.author.slug : "#"}`}>
        {post.author.name}
      </Link>
      <br />
      {moment(post.date).format(`MMM Do YY`)}
    </Col>
  </Row>
)

export default PostEntryMeta
