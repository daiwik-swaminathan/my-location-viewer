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
const sacramento = [-121.4944, 38.5816]; // Sacramento

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

// Add Los Angeles marker
const laMarker = document.createElement('div');
laMarker.className = 'marker';
laMarker.style.backgroundColor = '#CC0000'; // Dark red
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
sfMarker.style.backgroundColor = '#990000'; // Darkest red
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

// Add Sacramento marker
const sacMarker = document.createElement('div');
sacMarker.className = 'marker';
sacMarker.style.backgroundColor = '#FFCCCC'; // Light red
sacMarker.style.width = '20px';
sacMarker.style.height = '20px';
sacMarker.style.borderRadius = '50%';
sacMarker.style.position = 'absolute';

const sacOverlay = new Overlay({
  position: fromLonLat(sacramento),
  positioning: 'center-center',
  element: sacMarker,
  stopEvent: false
});
map.addOverlay(sacOverlay);
