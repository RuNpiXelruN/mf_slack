import React, { PropTypes } from 'react'

LoginButton.propTypes = {
  onAuth: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default function LoginButton ({onAuth, isFetching}) {
  return (
    <button onClick={onAuth}>
      {isFetching === true
        ? 'Loading'
        : 'Sign In' }
    </button>
  )
}
