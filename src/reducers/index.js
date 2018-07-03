import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import user from './user';
import navbar from './navbar';
import blog from './blog';
import blogpost from './blogpost';

const rootReducer = combineReducers({
  navbar,
  session,
  user,
  blog,
  blogpost,
  firebase: firebaseReducer,
  form: formReducer
});


export default rootReducer;
