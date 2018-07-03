import { FETCH_POST_SUCCESS, SET_LOADING } from '../actions';

const INITIAL_STATE = {
  post: null
};

function blogpost(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST_SUCCESS: 
      return { ...state, post: action.post };
    default:
      return state;
  }
}

export default blogpost;