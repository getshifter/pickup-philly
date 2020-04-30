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
    const styles = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      },
console.log('mapstyles')

    ]

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
