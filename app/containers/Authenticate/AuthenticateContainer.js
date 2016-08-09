import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  },
  handleAuth () {
    this.props.fetchAndHandleAuthedUser()
  },

  render () {
    return (
      <Authenticate
        error={this.props.error}
        isFetching={this.props.isFetching}
        onAuth={this.handleAuth}/>
    )
  }
})

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators,dispatch)
}

function mapStateToProps (state) {
  console.log('STATE: ', state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
