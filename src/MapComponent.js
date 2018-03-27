import React, { Component } from 'react';

import 'ol/ol.css';
import ol from 'ol';
import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import TileArcGISRest from 'ol/source/tilearcgisrest';
import OSM from 'ol/source/osm';

class MapComponent extends Component {

	componentDidMount() {
		var layers = [
			new Tile({
				source: new OSM
			}),
			new Tile({
				extent: [-13884991, 2870341, -7455066, 6338219],
				source: new TileArcGISRest({
					url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' + 'Specialty/ESRI_StateCityHighway_USA/MapServer'
				})
			})
		];
		var map = new Map({
			layers: layers,
			target: 'map',
			view: new View({
				center: [-10997148, 4569099],
          		zoom: 4
			})
		});
	}
	render() {
		
		return (
			<div id="map"></div>
		)
	}
}

export default MapComponent;