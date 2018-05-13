import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import user from './user';
import navbar from './navbar';

const rootReducer = combineReducers({
  navbar,
  session,
  user,
  firebase: firebaseReducer,
  form: formReducer
});


export default rootReducer;
