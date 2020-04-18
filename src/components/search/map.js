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
import LocationCard from "../Locations/card"
import Header from "../Header/Header"

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

class Map extends Component {
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

export default Map
