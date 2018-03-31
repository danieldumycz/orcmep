import { ADD_LAYER } from "../constants/action-types";

const initialState = {
    layers: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LAYER:
      return { ...state, layers: [...state.layers, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
