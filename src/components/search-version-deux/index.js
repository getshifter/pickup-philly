import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  ClearRefinements,
  Configure,
  connectHits,
  connectRefinementList,
  connectSearchBox,
} from "react-instantsearch-dom"
import {
  GoogleMapsLoader,
  GeoSearch,
  Marker,
} from "react-instantsearch-dom-maps"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Input, Button, Form, Row, Col } from "reactstrap"
import Header from "../Header/Header"
import withURLSync from "./URLSync"
import LocationCard from "../Locations/card"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

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

function SearchInput() {
  return <CustomSearchBox />
}

const Filters = () => (
  <Fragment>
    <CategoryType attribute="categories.nodes.name" limit={50} />
    <FulfillmentOptions attribute="acf_location.fulfillmentOptions" />
  </Fragment>
)

const LocationsMap = () => (
  <GoogleMapsLoader
    apiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
    endpoint="https://maps.googleapis.com/maps/api/js?v=weekly"
  >
    {google => (
      <GeoSearch
        google={google}
        styles={[
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#242f3e",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#746855",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#242f3e",
              },
            ],
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#263c3f",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6b9a76",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#38414e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#212a37",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9ca5b3",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#746855",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#1f2835",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#f3d19c",
              },
            ],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#2f3948",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#17263c",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#515c6d",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#17263c",
              },
            ],
          },
        ]}
      >
        {({ hits }) => (
          <Fragment>
            {hits.map(hit => (
              <Marker key={hit.objectID} hit={hit} />
            ))}
            <ClearRefinements
              className="ClearGeoRefinement"
              transformItems={items =>
                items.filter(item => item.id === "boundingBox")
              }
              translations={{
                reset: "Clear the map refinement",
              }}
            />
          </Fragment>
        )}
      </GeoSearch>
    )}
  </GoogleMapsLoader>
)

const FulfillmentOptions = connectRefinementList(({ items, refine }) => {
  const sortedItems = items.sort((i1, i2) => i1.label.localeCompare(i2.label))
  const hitComponents = sortedItems.map(item => {
    return (
      <Button
        size="sm"
        pill="true"
        className="m-1"
        color={item.isRefined ? "primary" : "outline-primary"}
        onClick={event => {
          event.preventDefault()
          refine(item.value)
        }}
        value={item.value}
      >
        {item.label}
        {` `}
        {item.count}
      </Button>
    )
  })

  return (
    <div>
      <div className="text-center">Fulfillment Options</div>
      <div className="d-flex flex-wrap align-items-center justify-content-center pb-4">
        {hitComponents}
      </div>
    </div>
  )
})

const CategoryType = connectRefinementList(({ items, refine }) => {
  const sortedItems = items.sort((i1, i2) => i1.label.localeCompare(i2.label))
  const hitComponents = sortedItems.map(item => {
    return (
      <Button
        size="sm"
        pill="true"
        className="m-1"
        color={item.isRefined ? "primary" : "outline-primary"}
        onClick={event => {
          event.preventDefault()
          refine(item.value)
        }}
        value={item.value}
      >
        {item.label}
        {` `}
        {item.count}
      </Button>
    )
  })

  return (
    <div>
      <div className="text-center">Categories</div>
      <div className="d-flex flex-wrap align-items-center justify-content-center pb-4">
        {hitComponents}
      </div>
    </div>
  )
})

const ResultsList = connectHits(({ hits }) => {
  const theHits = hits.map(hit => <HitComponent key={hit.objectID} hit={hit} />)
  return theHits
})

function HitComponent({ hit }) {
  return <LocationCard data={hit} />
}

HitComponent.propTypes = {
  hit: PropTypes.object,
}

const Results = () => <ResultsList />

const SearchVersionDeux = props => (
  <InstantSearch
    searchClient={searchClient}
    indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
    searchState={props.searchState}
    createURL={props.createURL}
    onSearchStateChange={props.onSearchStateChange}
  >
    <Configure hitsPerPage={200} clickAnalytics aroundLatLngViaIP={true} />
    <Row noGutters>
      <Col className="d-none d-md-block">
        <LocationsMap />
      </Col>
      <Col>
        <div className="list-wrapper">
          <div className="list-container p-4">
            <Header />
            <SearchInput />
            <Filters />
            <Results />
          </div>
        </div>
      </Col>
    </Row>
  </InstantSearch>
)

export default withURLSync(SearchVersionDeux)
