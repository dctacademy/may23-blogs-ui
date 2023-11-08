import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

/*
  2 links
    * home  -> home
    * blogs -> BlogsList
  

*/ 