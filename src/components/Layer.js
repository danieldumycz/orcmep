import React from 'react'

const Layer = ({onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed? 'line-through' : 'none'
        }}
    >
    {text}
    </li>
)