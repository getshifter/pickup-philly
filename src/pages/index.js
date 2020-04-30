import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
// import Search from "../components/search"
import SearchVersionDeux from "../components/search-version-deux";

const IndexPage = ({ location }) => {
  return (
    <>
      <Seo title="Pickup Philly" />
      <Layout location={{ location }} primaryContent={<SearchVersionDeux />} />
    </>
  )
}

export default IndexPage
