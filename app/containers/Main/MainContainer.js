import React from 'react'
import { HomeContainer } from 'containers'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  render () {
    return (
      <div>
        <Navigation isAuthed={false}/>
        {this.props.children}
      </div>
    )
  }
})

export default MainContainer
