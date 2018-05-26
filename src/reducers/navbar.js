import { UPDATE_DIMENSIONS, SET_HIDDEN_STATE } from '../actions';

const INITIAL_STATE = {
  hidden: true,
  dimensions: null
};

function navbar(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_DIMENSIONS: 
      return { ...state, dimensions: action.dimensions };
    case SET_HIDDEN_STATE:
    	return { ...state, hidden: action.status}
    default:
      return state;
  }
}

export default navbar;