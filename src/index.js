import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import App from './App';
import RRFProvider from "./firebase/react-redux-firebase"
import './index.css'; 

ReactDOM.render(
  <Provider store = {store} >
    <RRFProvider>
  <Router >
    <App /> 
    </Router> 
    </RRFProvider>
    </Provider>,
  document.getElementById('root')
);

