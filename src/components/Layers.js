import React from 'react'
import Layer from './Layer'

const Layers = ({layers, onLayerClick}) => (
    <ul>
        {layers.map((todo,index) => (
            <Layer key={index} {...layer} onClick={() => onLayerClick(index)} />
        ))}
    </ul>
)

export default Layers