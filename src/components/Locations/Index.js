import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LocationCard from "../Locations/card"

const Locations = () => {
  const data = useStaticQuery(
    graphql`
      query LOCATIONS {
        wpgraphql {
          locations: graphql_all_locations(first: 100) {
            nodes {
              id
              title
              slug
              acf_location {
                fulfillmentOptions
                orderingOptions
                paymentOptions
                website
                phone
                availabilityNotes
                hours
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
                }
              }
            }
          }
        }
      }
    `
  )

  const locations = data.wpgraphql.locations.nodes

  return (
    <>
      {locations.map(location => (
        <LocationCard data={location} />
      ))}
    </>
  )
}

export default Locations
