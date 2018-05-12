import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';
import session from './session';
import user from './user';

const rootReducer = combineReducers({
  session,
  user,
  firebase: firebaseReducer,
  form: formReducer
});


export default rootReducer;
