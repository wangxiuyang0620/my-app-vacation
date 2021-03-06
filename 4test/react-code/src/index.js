import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import http from './until/http'
import * as serviceWorker from './serviceWorker';
React.Component.prototype.$http = http;
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
