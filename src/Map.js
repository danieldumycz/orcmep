import React, { Component } from 'react';

import './Map.css';

import {Layers} from './Layers/Layers';
import {layer} from './Layers/index';

import ol_Map from 'ol/map';
import ol_View from 'ol/view';
import ol_Tile from 'ol/layer/tile';
import ol_TileArcGISRest from 'ol/source/tilearcgisrest';
import ol_OSM from 'ol/source/osm';

import $ from 'jquery';

class Map extends Component {
  map = ol_Map;

  layers = [];

  options = {
    pixelRation: undefined,
    keyboardEventTarget: undefined,
    loadTilesWhileAnimation: undefined,
    loadTilesWhileInteractiong: undefined,
    logo: undefined,
    renderer: undefined,
    setCenter: undefined,
    setZoom: undefined,
    setResolution: undefined,
    view: new ol_View({center: [0, 0], zoom: 3}),
    layers: undefined,
    overlays: undefined
  };

  events = {
    'change': undefined,
    'change:layerGroup': undefined,
    'change:size': undefined,
    'change:target': undefined,
    'change:view': undefined,
    'click': undefined,
    'dblclick': undefined,
    'moveend': undefined,
    'pointerdrag': undefined,
    'pointermove': undefined,
    'postcompose': undefined,
    'postrender': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'singleclick': undefined
  };

  constructor(props) {
    super(props);
    console.log('Map Constructor');
  }

  render() {    
    return (
      <div>
        <div className="map" id="map">
          {this.props.children}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.map.setTarget(undefined)
  }

  componentDidMount() {
		var layers = [
			new ol_Tile({
				source: new ol_OSM
			}),
		];
		var map = new ol_Map({
			layers: layers,
			target: 'map',
			view: new ol_View({
				center: [-10997148, 4569099],
          		zoom: 4
			})
    });
    
    $("#map").css("height", $(window).height());
    map.updateSize();
  }
  
	render() {	
		return (
			<div id="map"></div>
		)
	}
}

export default Map;
