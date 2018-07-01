import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as contentful from 'contentful'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'react-typist/dist/Typist.css';
import './index.css';

import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

var client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY
})
//TODO: move this to redux
client.getEntries().then(entries => {
  entries.items.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
