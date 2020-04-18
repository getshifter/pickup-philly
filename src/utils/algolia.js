const algoliaQuery = ` {
  wpgraphql {
    locations: graphql_all_locations(
      first: 500
      where: { orderby: { field: TITLE, order: ASC } }
    ) {
      edges {
        node {
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
}`

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) =>
      data.wpgraphql.locations.edges.map(({ node }) => {
        const data = {}
        const lat = node.acf_location.address.latitude
        const lng = node.acf_location.address.longitude
        data.node = node
        data.node._geoloc = { lat: lat, lng: lng }
        return data.node
      }),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  },
]

module.exports = queries
