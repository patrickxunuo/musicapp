import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider as ReduxProvider} from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";

const devStage = true

// store, compatible with thunk, redux devtools
const reduxStore = createStore(
  reducers,
  devStage ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
)

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
