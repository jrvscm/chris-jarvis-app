import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import user from './user';
import navbar from './navbar';
import blog from './blog';

const rootReducer = combineReducers({
  navbar,
  session,
  user,
  blog,
  firebase: firebaseReducer,
  form: formReducer
});


export default rootReducer;
