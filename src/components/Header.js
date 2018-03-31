import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
	// handleClick(componentName, e){
	// 	var tmp = this.state.render.slice();
	// 	if(tmp.length > 0){ 
	// 		var index = tmp.indexOf(componentName);
	// 		if(index > -1){
	// 			tmp.splice(index, 1);
	// 		} else {
	// 			tmp.push(componentName);
	// 		}
	// 	} else {
	// 		tmp.push(componentName);
	// 	}
	// 	this.setState({render:tmp});
	// }

	// _renderSubComp(){
	// 	var renderedComponents = [];
	// 	for(let component of this.state.render){
	// 		switch(component){
	// 			case 'draw': break;
	// 			// case 'switch' : renderedComponents.push(<Switcher/>); break;
	// 			// case 'symbols' : renderedComponents.push(<Symbols/>); break;
	// 			default: break;
	// 		}
	// 	}
	// 	return renderedComponents;
    // }

	render() {
		return (
            <header className="header">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <img src="orc.png" className="logo" alt="logo" />
                    </li>
                    <li className="list-inline-item">
                        <h1 className="title">ORC MEP</h1>
                    </li>
                    {/* <li className="list-inline-item float-right">
                        <button  className="btn btn-danger" onClick={this.handleClick.bind(this, 'clear')}>CLEAR</button>
                    </li> */}
                    {/* <li className="list-inline-item float-right">
                        <button className="btn btn-light" onClick={this.handleClick.bind(this, 'switch')}>SWITCH</button>
                    </li>
                    <li className="list-inline-item float-right">
                        <button className="btn btn-light" onClick={this.handleClick.bind(this, 'symbols')}>SYMBOLS</button>
                    </li>
                    <li className="list-inline-item float-right" style={{'paddingRight':'10px'}}>
                        <button className="btn btn-light" onClick={this.handleClick.bind(this, 'draw')}>DRAW</button>
                    </li> */}
                </ul>
                {/* {this._renderSubComp() /*Calls our sub component render*/} 		 */}
            </header>
		);
	}
}

export default Header;
