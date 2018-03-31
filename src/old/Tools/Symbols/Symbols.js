import React, { Component } from 'react';
import Rnd from 'react-rnd';
 
class Symbols extends Component {
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
                    Symbols
                </div>
                <div className="card-body">
                    <p className="card-text">Put some symbols on the mep</p>
                </div>
            </Rnd>
        );
    }
}

export default Symbols;