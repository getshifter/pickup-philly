import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/search"

const IndexPage = ({ location }) => {
  return (
    <Layout location={{ location }} primaryContent={<Search />}>
      <Seo title="Pickup Philly" />
    </Layout>
  )
}

export default IndexPage
