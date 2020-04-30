import React, { Component } from "react"
import PropTypes from "prop-types"
import { GeoSearch, Marker } from "react-instantsearch-dom-maps"

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
      <GeoSearch 
      google={google} 
      styles= {styles}
>
        {({ hits }) => <>{hits.map(this.renderGeoHit)}</>}
      </GeoSearch>
    )
  }
}

export default Map
