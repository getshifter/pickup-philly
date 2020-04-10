import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import LocationCard from "../Locations/card"

const Locations = () => {
  const data = useStaticQuery(
    graphql`
      query LOCATIONS {
        wpgraphql {
          showcase: graphql_all_locations(first: 100) {
            nodes {
              id
              title
              slug
            }
          }
        }
      }
    `
  )

  const studies = data.wpgraphql.showcase.nodes

  return (
    <>
      {studies.map(post => (
        <LocationCard data={post} />
      ))}
    </>
  )
}

export default Locations
