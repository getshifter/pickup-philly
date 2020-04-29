import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/search"

const IndexPage = ({ location }) => {
  return (
    <>
      <Seo title="Pickup Philly" />
      <Layout location={{ location }} primaryContent={<Search />} />
    </>
  )
}

export default IndexPage
