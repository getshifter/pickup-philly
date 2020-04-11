import React from 'react';
import mapboxgl from 'mapbox-gl';
import './style.scss'
mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_TOKEN

var places = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'properties': {
        'icon': 'theatre'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.038659, 38.931567]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'theatre'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.003168, 38.894651]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'bar'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.090372, 38.881189]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'bicycle'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.052477, 38.943951]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'music'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.031706, 38.914581]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'music'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.020945, 38.878241]
      }
    },
    {
      'type': 'Feature',
      'properties': {
        'icon': 'music'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.007481, 38.876516]
      }
    }
  ]
};

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 39.9310207,
      lng: -75.1640082,
      zoom: 14
    };
  }

  componentDidMount() {

    var filterGroup = document.getElementById('filter-group');

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('load', function () {
      // Add a GeoJSON source containing place coordinates and information.
      map.addSource('places', {
        'type': 'geojson',
        'data': places
      });

      places.features.forEach(function (feature) {
        var symbol = feature.properties['icon'];
        var layerID = 'poi-' + symbol;

        // Add a layer for this symbol type if it hasn't been added already.
        if (!map.getLayer(layerID)) {
          map.addLayer({
            'id': layerID,
            'type': 'symbol',
            'source': 'places',
            'layout': {
              'icon-image': symbol + '-15',
              'icon-allow-overlap': true
            },
            'filter': ['==', 'icon', symbol]
          });

          // Add checkbox and label elements for the layer.
          var input = document.createElement('input');
          input.type = 'checkbox';
          input.id = layerID;
          input.checked = true;
          filterGroup.appendChild(input);

          var label = document.createElement('label');
          label.setAttribute('for', layerID);
          label.textContent = symbol;
          filterGroup.appendChild(label);

          // When the checkbox changes, update the visibility of the layer.
          input.addEventListener('change', function (e) {
            map.setLayoutProperty(
              layerID,
              'visibility',
              e.target.checked ? 'visible' : 'none'
            );
          });
        }
      });
    });


    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <>
        <nav id="filter-group" className="filter-group"></nav>
        <div ref={el => this.mapContainer = el} className='mapContainer h-100' />
      </>
    )
  }
}