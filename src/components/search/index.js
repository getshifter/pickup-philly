import React, { Component } from "react"
import Typed from "react-typed"
import { useStaticQuery, graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectSearchBox,
  Configure,
  connectHits,
  connectHitInsights,
  // connectHighlight,
} from "react-instantsearch-dom"
import { Container, Row, Col, Form, ListGroup } from "reactstrap"
import LocationCard from "../Locations/card"

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

const SearchBox = ({ currentRefinement, refine }) => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        graphql_all_location_categories {
          nodes {
            name
            id
          }
        }
      }
    }
  `)

  const placeholderSearchTerms = data.wpgraphql.graphql_all_location_categories.nodes.map(
    term => `Search ` + term.name
  )

  return (
    <Form noValidate action="" role="search" className="input-group-lg mb-3">
      <Typed
        strings={placeholderSearchTerms}
        typeSpeed={150}
        backSpeed={100}
        attr="placeholder"
        loop
        smartBackspace
      >
        <input
          type="search"
          className="form-control"
          value={currentRefinement}
          placeholder="Search Pickup Philly"
          onChange={event => refine(event.currentTarget.value)}
        />
      </Typed>
    </Form>
  )
}

const CustomSearchBox = connectSearchBox(SearchBox)

// const Highlight = ({ highlight, attribute, hit }) => {
//   const parsedHit = highlight({
//     highlightProperty: "_highlightResult",
//     attribute,
//     hit,
//   })

//   return (
//     <span>
//       {parsedHit.map((part, index) =>
//         part.isHighlighted ? (
//           <mark key={index}>{part.value}</mark>
//         ) : (
//           <span key={index}>{part.value}</span>
//         )
//       )}
//     </span>
//   )
// }

// const CustomHighlight = connectHighlight(Highlight)

const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          processingTimeMS: 0,
        })),
      })
    }

    return algoliaClient.search(requests)
  },
}

class Search extends Component {
  render() {
    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="locations">
          <Configure
            clickAnalytics
            hitsPerPage={10}
            attributesToSnippet={["content"]}
          />
          <CustomSearchBox />
          <CustomHits />
        </InstantSearch>
      </>
    )
  }
}

const Hit = ({ hit }) => {
  return <LocationCard data={hit} />
}

const HitWithInsights = connectHitInsights()(Hit)

const Hits = ({ hits }) => (
  <ListGroup>
    {hits.map(hit => {
      return <HitWithInsights key={hit.objectID} hit={hit} />
    })}
  </ListGroup>
)

const CustomHits = connectHits(Hits)

export default Search
