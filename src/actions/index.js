import {ADD_LAYER} from "../constants/action-types";

export const addLayer = article => (
    { 
        type: ADD_LAYER, 
        payload: article 
    }
);
