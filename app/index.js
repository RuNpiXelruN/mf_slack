import React from 'react'
import ReactDOM from 'react-dom'
import routes from 'config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import * as reducers from 'redux/modules'

// const store = createStore(combineReducers({...reducers, routing: routeReducer}), compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : (f) => f
// ))

ReactDOM.render(
  <Provider >
    {routes}
  </Provider>,
  document.getElementById('app')
)
