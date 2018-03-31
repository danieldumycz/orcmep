import React, { Component } from 'react';
import configureStore from '../configureStore'

const store = configureStore()

export default class Root extends Component {
    render(){
        return (
            <Mep store={store}>
            </Mep>
        );
    }
}