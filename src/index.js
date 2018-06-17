import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-typist/dist/Typist.css';
import './index.css';

import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
