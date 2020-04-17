import React, { Component } from "react"
import Typed from "react-typed"
import { useStaticQuery, graphql } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Configure,
  connectSearchBox,
  connectHits,
  connectHitInsights,
  connectMenu,
} from "react-instantsearch-dom"
import { Form, Button } from "reactstrap"
import LocationCard from "../Locations/card"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class Search extends Component {
  render() {
    const SearchBox = ({ currentRefinement, refine }) => {
      const data = useStaticQuery(graphql`
        query LOCATION_CATEGORIES {
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
        <Form
          noValidate
          action=""
          role="search"
          className="input-group-lg mb-3"
        >
          <Typed
            strings={placeholderSearchTerms}
            typeSpeed={200000}
            backSpeed={200000}
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

    const Hit = ({ hit }) => {
      return <LocationCard data={hit} />
    }

    const HitWithInsights = connectHitInsights()(Hit)

    const allLocations = props => {
      const locations = this.props.data
      return locations.map(location => {
        return <LocationCard key={location.id} data={location} />
      })
    }

    const Hits = ({ hits }) => (
      <>
        {hits.length
          ? hits.map(hit => {
              return <HitWithInsights key={hit.objectID} hit={hit} />
            })
          : allLocations()}
      </>
    )

    const CustomHits = connectHits(Hits)

    const Menu = ({ items, refine }) => (
      <div className="d-flex flex-wrap align-items-center justify-content-center pb-4">
        {items.map(item => (
            <Button
            className="m-2"
            size="sm"
              pill
              color={item.isRefined ? "primary" : "outline-primary"}
              onClick={event => {
                event.preventDefault()
                refine(item.value)
              }}
            >
              {item.label}
            </Button>
        ))}
      </div>
    )

    const CustomMenu = connectMenu(Menu)

    return (
      <>
        <InstantSearch searchClient={searchClient} indexName="locations">
          <Configure
            clickAnalytics
            hitsPerPage={10}
            attributesToSnippet={["title"]}
          />
          <CustomSearchBox />
          <CustomMenu attribute="categories.nodes.name" />
          <CustomHits data={this.props.data} />
        </InstantSearch>
      </>
    )
  }
}

export default Search
