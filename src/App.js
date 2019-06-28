import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Provider } from 'react-redux'
import rootReducer from './root'
import { rootEpic } from './epics';


const epicMiddleWare = createEpicMiddleware(rootEpic)

const store = createStore(rootReducer, applyMiddleware(epicMiddleWare))

const appWithProvider = (
  <Provider store={store}>
    <App />
  </Provider>)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default appWithProvider;
