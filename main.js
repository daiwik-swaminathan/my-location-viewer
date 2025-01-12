import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import {fromLonLat} from 'ol/proj.js';
import Overlay from 'ol/Overlay';

// Define coordinates for markers
const calPoly = [-120.6596, 35.2828]; // Cal Poly
const losAngeles = [-118.2437, 34.0522]; // Los Angeles
const sanFrancisco = [-122.4194, 37.7749]; // San Francisco

// Create the map
const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  target: 'map',
  view: new View({
    center: fromLonLat(calPoly), // Centered at Cal Poly
    zoom: 7
  })
});

// Add Cal Poly marker
// const calPolyMarker = document.createElement('div');
// calPolyMarker.className = 'marker';
// calPolyMarker.style.backgroundColor = '#FF0000'; // Bright red
// calPolyMarker.style.width = '20px';
// calPolyMarker.style.height = '20px';
// calPolyMarker.style.borderRadius = '50%';
// calPolyMarker.style.position = 'absolute';

// const calPolyOverlay = new Overlay({
//   position: fromLonLat(calPoly),
//   positioning: 'center-center',
//   element: calPolyMarker,
//   stopEvent: false
// });
// map.addOverlay(calPolyOverlay);

// Add Los Angeles marker
const laMarker = document.createElement('div');
laMarker.className = 'marker';
laMarker.style.backgroundColor = '#FF6666'; // Lighter red
laMarker.style.width = '20px';
laMarker.style.height = '20px';
laMarker.style.borderRadius = '50%';
laMarker.style.position = 'absolute';

const laOverlay = new Overlay({
  position: fromLonLat(losAngeles),
  positioning: 'center-center',
  element: laMarker,
  stopEvent: false
});
map.addOverlay(laOverlay);

// Add San Francisco marker
const sfMarker = document.createElement('div');
sfMarker.className = 'marker';
sfMarker.style.backgroundColor = '#FF9999'; // Even lighter red
sfMarker.style.width = '20px';
sfMarker.style.height = '20px';
sfMarker.style.borderRadius = '50%';
sfMarker.style.position = 'absolute';

const sfOverlay = new Overlay({
  position: fromLonLat(sanFrancisco),
  positioning: 'center-center',
  element: sfMarker,
  stopEvent: false
});
map.addOverlay(sfOverlay);
