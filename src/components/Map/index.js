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
    const filterGroup = document.getElementById("filter-group")
    const { wpgraphql } = this.props.data
    const locations = wpgraphql.locations.nodes
    let features = []
    locations.map((location, i) => {
      // console.log(location)
      const title = location.title
      const longitude = location.acf_location.address.longitude
      const latitude = location.acf_location.address.latitude
      features[i] = {
        type: "Feature",
        properties: {
          icon: "theatre",
          description: title
        },
        geometry: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
      }
    })

    console.log(features)

    var places = {
      type: "FeatureCollection",
      features: features,
    }

    console.log(places)

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    map.on("load", function() {
      // Add a GeoJSON source containing place coordinates and information.
      map.addSource("places", {
        type: "geojson",
        data: places,
      })

      places.features.forEach(function(feature) {
        var symbol = feature.properties["icon"]
        var layerID = "poi-" + symbol

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
          map.addLayer({
            id: layerID,
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": symbol + "-15",
              "icon-allow-overlap": true,
            },
            filter: ["==", "icon", symbol],
          })

          // Add checkbox and label elements for the layer.
          var input = document.createElement("input")
          input.type = "checkbox"
          input.id = layerID
          input.checked = true
          filterGroup.appendChild(input)

          var label = document.createElement("label")
          label.setAttribute("for", layerID)
          label.textContent = symbol
          filterGroup.appendChild(label)

          // When the checkbox changes, update the visibility of the layer.
          input.addEventListener("change", function(e) {
            map.setLayoutProperty(
              layerID,
              "visibility",
              e.target.checked ? "visible" : "none"
            )
          })
        }
      })

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl())
    })

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      })
    })
  }

  render() {
    return (
      <>
        <nav id="filter-group" className="filter-group"></nav>
        <div
          ref={el => (this.mapContainer = el)}
          className="mapContainer h-100"
        />
      </>
    )
  }
}

Map.propTypes = {
  data: PropTypes.object,
}

Map.defaultProps = {
  data: null,
}
