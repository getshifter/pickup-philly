import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Locations from "../components/Locations/Index"
import Map from "../components/Map"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query LOCATIONS_OTHER {
        wpgraphql {
          locations: graphql_all_locations(
            first: 500
            where: { orderby: { field: TITLE, order: ASC } }
          ) {
            nodes {
              id
              title
              slug
              databaseId
              acf_location {
                fulfillmentOptions
                orderingOptions
                paymentOptions
                website
                phone
                availabilityNotes
                hours
                employeeReliefFund
                address {
                  city
                  country
                  countryShort
                  latitude
                  longitude
                  placeId
                  postCode
                  state
                  stateShort
                  streetAddress
                  streetName
                  streetNumber
                  zoom
                }
              }
              categories: graphql_all_location_categories {
                nodes {
                  name
                  id
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout
      location={{ location }}
      primaryContent={<Map data={data} />}
      secondaryContent={
        <>
          <Locations />
        </>
      }
    >
      <Seo title="Pickup Philly" />
    </Layout>
  )
}

export default IndexPage
