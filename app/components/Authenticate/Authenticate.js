import React, { PropTypes } from 'react'
import { LoginButton } from 'components'

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default function Authenticate({error, isFetching, onAuth}) {
  return (
    <div>
      <h1>Sign In</h1>
      <LoginButton onAuth={onAuth} isFetching={isFetching} />
      {error ? <p>{error}</p> : null}
    </div>
  )
}
