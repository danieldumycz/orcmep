import React, { Component } from 'react';
import Rnd from 'react-rnd';
 
class Switcher extends Component {
    render() {
        const style = {
            display: 'flex',
            border: 'solid 1px #ddd',
            zIndex: 9999
        };
        console.log(this.map);
        return (
           <Rnd
                style={style}
                className="card"
                default={{
                    x: 250,
                    y: 500
                }}
            >
                <div className="card-header">
                    Switcher
                </div>
                <div className="card-body">
                    <p className="card-text">Switch or Pick Layers</p>
                    {/* <input type='checkbox' checked='checked' value='true'>Checkbox</input>; */}
                </div>
            </Rnd>

        );
    }
}

export default Switcher;
