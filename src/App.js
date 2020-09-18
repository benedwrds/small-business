import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Navigation/>
      <Router/>
      </BrowserRouter> 
      </Provider>
    </div>
  );
}

export default App;
