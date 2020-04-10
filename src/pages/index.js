import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const IndexPage = ({ location }) => (
  <Layout location={{ location }}>
    <Seo />
    <h1>Hello World</h1>
  </Layout>
)

export default IndexPage
