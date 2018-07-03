import { UPDATE_DIMENSIONS, SET_HIDDEN_STATE, SET_FIRST_LOAD, SET_SCROLL_TO_CONTACT } from '../actions';

const INITIAL_STATE = {
  hidden: true,
  dimensions: null,
  firstLoad: true,
  scrollToContact: false
};

function navbar(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_DIMENSIONS: 
      return { ...state, dimensions: action.dimensions };
    case SET_HIDDEN_STATE:
    	return { ...state, hidden: action.status };
    case SET_SCROLL_TO_CONTACT:
      return { ...state, scrollToContact: action.status };
    default:
      return state;
  }
}

export default navbar;