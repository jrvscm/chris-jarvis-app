import { FETCH_POSTS_SUCCESS, SET_LOADING } from '../actions';

const INITIAL_STATE = {
  posts: [],
  loading: true
};

function blog(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS_SUCCESS: 
      return { ...state, posts: action.posts };
    case SET_LOADING:
      return { ...state, loading: action.status}
    default:
      return state;
  }
}

export default blog;