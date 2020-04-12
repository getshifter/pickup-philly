import React from "react"
import mapboxgl from "mapbox-gl"
import PropTypes from "prop-types"
import "./style.scss"

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_TOKEN

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 39.9310207,
      lng: -75.1640082,
      zoom: 14,
    }
  }

  componentDidMount() {
    const { wpgraphql } = this.props.data
    const locations = wpgraphql.locations.nodes
    let features = []
    locations.map((location, i) => {
      const title = location.title
      const longitude = location.acf_location.address.longitude
      const latitude = location.acf_location.address.latitude
      features[i] = {
        type: "Feature",
        properties: {
          icon: "marker",
          title: title,
          description: "description",
        },
        geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      }
      return null
    })

    var geojson = {
      type: "FeatureCollection",
      features: features,
    }

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    map.on("load", function() {
      // add markers to map
      geojson.features.forEach(function(marker) {
        // create a HTML element for each feature
        var el = document.createElement("div")
        el.className = "marker"

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup() // add popups
              .setHTML(
                "<h3>" +
                  marker.properties.title +
                  "</h3><p>" +
                  marker.properties.description +
                  "</p>"
              )
          )
          .addTo(map)
      })
    })
  }

  render() {
    return (
      <div>
        <div ref={el => (this.mapContainer = el)} className="map-container" />
      </div>
    )
  }
}

Map.propTypes = {
  data: PropTypes.object,
}

Map.defaultProps = {
  data: null,
}
