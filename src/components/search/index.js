import React, { Component } from "react"
import PropTypes from "prop-types"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Configure,
  connectSearchBox,
  connectHits,
  connectHitInsights,
  connectMenu,
} from "react-instantsearch-dom"
import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  Marker,
  CustomMarker,
} from "react-instantsearch-dom-maps"
import { Form, Button, Input, Row, Col } from "reactstrap"
import Map from './map'
import LocationCard from "../Locations/card"
import Header from "../Header/Header"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class LocationMap extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
  }

  InfoWindow = new this.props.google.maps.InfoWindow()

  onClickMarker = ({ hit, marker }) => {
    if (this.InfoWindow.getMap()) {
      this.InfoWindow.close()
    }

    this.InfoWindow.setContent(hit.title)
    this.InfoWindow.open(marker.getMap(), marker)
  }

  renderGeoHit = hit => (
    <Marker
      key={hit.objectID}
      hit={hit}
      anchor={{ x: 0, y: 5 }}
      onClick={({ marker }) => {
        this.onClickMarker({
          hit,
          marker,
        })
      }}
    />
  )

  render() {
    const { google } = this.props

    return (
      <GeoSearch google={google}>
        {({ hits }) => <>{hits.map(this.renderGeoHit)}</>}
      </GeoSearch>
    )
  }
}

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

    const Hits = ({ hits }) => (
      <div className="list-wrapper">
        <div className="list-container">
          {hits.map(hit => {
            return <HitWithInsights key={hit.objectID} hit={hit} />
          })}
        </div>
      </div>
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
          <Configure clickAnalytics hitsPerPage={1000} />
          <Row>
            <Col className="d-none d-md-block">
              <div style={{ height: `100%` }}>
                <GoogleMapsLoader
                  apiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
                >
                  {/* {google => (
                    <GeoSearch google={google}>
                      {({ hits }) => (
                        <div>
                          <Control />
                          {hits.map(hit => (
                            <Marker key={hit.objectID} hit={hit} />
                          ))}
                        </div>
                      )}
                    </GeoSearch>
                  )} */}
                  {google => <Map google={google} />}
                </GoogleMapsLoader>
              </div>
            </Col>
            <Col>
              <Header />
              <CustomSearchBox />
              <CustomMenu attribute="categories.nodes.name" />
              <CustomHits data={this.props.data} />
            </Col>
          </Row>
        </InstantSearch>
      </>
    )
  }
}

export default Search
