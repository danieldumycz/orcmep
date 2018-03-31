import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'

export default function configureStore(preloadedState){
    return createStore(
        rootReducer,
        preloadedState
    )
}