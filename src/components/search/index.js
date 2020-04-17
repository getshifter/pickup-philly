import React, { Component } from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Configure,
  connectSearchBox,
  connectHits,
  connectHitInsights,
  connectMenu,
} from "react-instantsearch-dom"
import { Form, Button, Input } from "reactstrap"
import LocationCard from "../Locations/card"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class Search extends Component {
  render() {
    const SearchBox = ({ currentRefinement, refine }) => {
      return (
        <Form noValidate action="" role="search" className="mb-3">
          <Input
            type="search"
            value={currentRefinement}
            placeholder="Search Pickup Philly"
            onChange={event => refine(event.currentTarget.value)}
          />
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
        <InstantSearch
          searchClient={searchClient}
          indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
        >
          <Configure
            clickAnalytics
            hitsPerPage={1000}
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
