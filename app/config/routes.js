import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, DashboardContainer, LogoutContainer } from 'containers'

export default function getRoutes(checkAuth) {
  return (
    <Router history={hashHistory} >
      <Router path='/' component={MainContainer} >
        <Route path='dashboard' component={DashboardContainer} onEnter={checkAuth} />
        <Route path='auth' component={AuthenticateContainer} onEnter={checkAuth} />
        <Route path='logout' component={LogoutContainer} />
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
