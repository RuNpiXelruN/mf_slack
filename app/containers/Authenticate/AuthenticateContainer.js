import React from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'

const AuthenticateContainer = React.createClass({
  handleAuth () {
    auth().then((user) => {
      console.log('USER: ', user)
    })
  },

  render () {
    return (
      <Authenticate
        error=''
        isFetching={false}
        onAuth={this.handleAuth}/>
    )
  }
})

export default AuthenticateContainer
