import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import RouterRoot from './router/router'
import RouterView from './router/routerview'
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>

   
    <div className="App">
    <BrowserRouter>
    <RouterView routers={RouterRoot}></RouterView>
    </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
