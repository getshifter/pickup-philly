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
  CustomMarker,
} from "react-instantsearch-dom-maps"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import { Input, Button, Form, Row, Col } from "reactstrap"
import Header from "../Header/Header"
import withURLSync from "./URLSync"
import LocationCard from "../Locations/card"
import{ Lens } from "@styled-icons/material-twotone/Lens"

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
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#efefef"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#2F2D1B"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]}
      >
        {({ hits }) => (
          <Fragment>
            {hits.map(hit => (
              <CustomMarker key={hit.objectID} hit={hit} ><Lens size="1.5rem" color="#00a18a"/> </CustomMarker>
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
