import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Locations from "../components/Locations/Index"

const IndexPage = ({ location }) => (
  <Layout
    location={{ location }}
    primaryContent={<>map</>}
    secondaryContent={
      <>
        <Locations />
      </>
    }
  >
    <Seo />
  </Layout>
)

export default IndexPage
