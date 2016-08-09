import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import users from 'redux/modules/users'
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(users, applyMiddleware(thunk))

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if ( nextPathName === '/auth') {
    if (isAuthed === true) {
      replace('/dashboard')
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
