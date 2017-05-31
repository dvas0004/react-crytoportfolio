import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './cryptocoins.css'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

import {BTCSaga, ETHSaga} from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducer,
  	applyMiddleware(sagaMiddleware, thunk)
)

// then run the saga
sagaMiddleware.run(BTCSaga)
sagaMiddleware.run(ETHSaga)

render(
  <div>
  <h1 className="cryptoTitle"> Dave Crypto Portfolio </h1>
  <Provider store={store}>
    <App />
  </Provider>
  </div>,
  document.getElementById('root')
)
registerServiceWorker();
