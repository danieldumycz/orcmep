import React, { Component } from 'react';

import 'ol/ol.css';
import ol from 'ol';
import Map from 'ol/map';
import View from 'ol/view';
import Tile from 'ol/layer/tile';
import Source from 'ol/source/osm';

class MapComponent extends Component {

	componentDidMount() {
		var map = new Map({
			view: new View({
				center: [0, 0],
				zoom: 1
			}),
			layers: [
				new Tile({
					source: ""
				})
			],
			target: 'map'
		});
	}
	render() {
		return (
			<div id="map"></div>
		)
	}
}

export default MapComponent;