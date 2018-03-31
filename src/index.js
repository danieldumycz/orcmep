import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import { addLayer } from "./actions/index";

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer)

window.store = store;
window.addLayer = addLayer;

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')    
)

registerServiceWorker();
