import React, { Component } from 'react';
import Rnd from 'react-rnd';
 
class Draw extends Component {
    render() {
        const style = {
            display: 'flex',
            border: 'solid 1px #ddd',
            zIndex: 9999
        };
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
                    Draw
                </div>
                <div className="card-body">
                    <p className="card-text">Make a pretty picture on the mep</p>
                    {/* <input type='checkbox' checked='checked' value='true'>Checkbox</input>; */}
                </div>
            </Rnd>
        );
    }
}

export default Draw;