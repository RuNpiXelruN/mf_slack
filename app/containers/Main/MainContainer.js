import React, { PropTypes } from 'react'
import { HomeContainer } from 'containers'
import { Navigation } from 'components'
import { connect } from 'react-redux'

const MainContainer = React.createClass({
  propTypes: {
    isAuthed: PropTypes.bool.isRequired
  },
  render () {
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed}/>
        {this.props.children}
      </div>
    )
  }
})

function mapStateToProps(state) {
  console.log('State', state)
  return {
    isAuthed: state.isAuthed
  }
}

export default connect (mapStateToProps)(MainContainer)
