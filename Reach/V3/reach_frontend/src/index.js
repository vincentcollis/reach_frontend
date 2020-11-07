import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './Componets/App';
import './index.css';
import reducers from './Redux/reducers'


import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// import {getMessages} from './Redux/actions'



const store = createStore(reducers, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
