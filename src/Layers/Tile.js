import React, { Component } from 'react';

import Map from '../Map';

import ol_OSM from 'ol/source/osm';
import ol_Tile from 'ol/layer/tile';

class Tile extends Component {

  layer = ol_Tile;

  options = {
    zIndex: undefined,
    opacity: undefined,
    preload: undefined,
    source: undefined,
    visible: undefined,
    extent: undefined,
    minResolution: undefined,
    maxResolution: undefined,
    useInterimTilesOnError: undefined
  };

  events = {
    'change': undefined,
    'change:extent': undefined,
    'change:maxResolution': undefined,
    'change:minResolution': undefined,
    'change:opacity': undefined,
    'change:preload': undefined,
    'change:source': undefined,
    'change:useInterimTilesOnError': undefined,
    'change:visible': undefined,
    'change:zIndex': undefined,
    'postcompose': undefined,
    'precompose': undefined,
    'propertychange': undefined,
    'render': undefined
  };

  constructor(props) {
    super(props);
    console.log('Tile constructor');
  }

  render() {
    return null;
  }

  componentDidMount () {
  
  }

  componentWillReceiveProps (nextProps) {
   
  }
  
  componentWillUnmount () {
    this.context.mapComp.map.removeLayer(this.layer);
  }

}

export default Tile

			// new Tile({
			// 	extent: [-13884991, 2870341, -7455066, 6338219],
			// 	source: new TileArcGISRest({
			// 		url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' + 'Specialty/ESRI_StateCityHighway_USA/MapServer'
			// 	})
			// })