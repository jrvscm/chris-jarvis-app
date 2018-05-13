import { UPDATE_DIMENSIONS } from '../actions';

const INITIAL_STATE = {
  hidden: null,
  dimensions: null
};

function navbar(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_DIMENSIONS: 
      return { ...state, dimensions: action.dimensions };
    default:
      return state;
  }
}

export default navbar;