import React, { Component } from 'react';
import './App.css';

import MapComponent from './MapComponent.js'

import Map from './Map.js'
import Draw from './Tools/Draw/Draw.js'
import Symbols from './Tools/Symbols/Symbols.js'
import Switcher from './Tools/Switcher/Switcher.js'

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
	constructor(){
		super();
		this.state={
			render: []
		}
	}

	handleClick(componentName, e){
		var tmp = this.state.render.slice();
		if(tmp.length > 0){ 
			var index = tmp.indexOf(componentName);
			if(index > -1){
				tmp.splice(index, 1);
			} else {
				tmp.push(componentName);
			}
		} else {
			tmp.push(componentName);
		}
		this.setState({render:tmp});
	}

	_renderSubComp(){
		var renderedComponents = [];
		for(let component of this.state.render){
			switch(component){
				case 'draw': renderedComponents.push(<Draw/>); break;
				case 'switch' : renderedComponents.push(<Switcher/>); break;
				case 'symbols' : renderedComponents.push(<Symbols/>); break;
			}
		}
		return renderedComponents;
    }

	render() {
		let layers = [
			{
				url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' + 'Specialty/ESRI_StateCityHighway_USA/MapServer'
			}
		]
		return (
		<div className="app">
			<header className="header">
				<ul className="list-inline">
					<li className="list-inline-item">
						<img src="orc.png" className="logo" alt="logo" />
					</li>
					<li className="list-inline-item">
						<h1 className="title">ORC MEP</h1>
					</li>
					<li className="list-inline-item float-right">
						<button  className="btn btn-danger" onClick={this.handleClick.bind(this, 'clear')}>CLEAR</button>
					</li>
					<li className="list-inline-item float-right">
						<button className="btn btn-light" onClick={this.handleClick.bind(this, 'switch')}>SWITCH</button>
					</li>
					<li className="list-inline-item float-right">
						<button className="btn btn-light" onClick={this.handleClick.bind(this, 'symbols')}>SYMBOLS</button>
					</li>
					<li className="list-inline-item float-right" style={{'paddingRight':'10px'}}>
						<button className="btn btn-light" onClick={this.handleClick.bind(this, 'draw')}>DRAW</button>
					</li>
				</ul>
			</header>
			{this._renderSubComp() /*Calls our sub component render*/} 
			<Map 
				layers={this.layers}
			/>
			
		</div>
		);
	}
}

export default App;
