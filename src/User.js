import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUser } from './redux/actions/index.actions'

class User extends Component {
  componentDidMount() {
    if (!this.props.user.isLoaded) {
      this.props.loadUser()
    }
  }

  render() {
    if (this.props.user.isLoaded) {
      return (
        <div>
          <h1>{this.props.user.data.name}</h1>
          <div>{this.props.user.data.email}</div>
        </div>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  { loadUser }
)(User)
