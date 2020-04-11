import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Locations from "../components/Locations/Index"
import Map from '../components/Map'

const IndexPage = ({ location }) => (
  <Layout
    location={{ location }}
    primaryContent={<Map />}
    secondaryContent={
      <>
        <Locations />
      </>
    }
  >
    <Seo title="Pickup Philly" />
  </Layout>
)

export default IndexPage
