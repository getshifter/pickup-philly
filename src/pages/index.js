import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Locations from '../components/Locations/Index'

const IndexPage = ({ location }) => (
  <Layout
    location={{ location }}
    primaryContent={<>this is the primary content</>}
    secondaryContent={<><Locations /></>}
  >
    <Seo />
    <h1>Hello World</h1>
  </Layout>
)

export default IndexPage
