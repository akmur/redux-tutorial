import React, { Component } from 'react'
import { connect } from 'react-redux'

class Status extends Component {
  render() {
    if (this.props.status.isLoaded) {
      return <div className="Status is-loaded">User Data Loaded</div>
    } else {
      return <div className="Status is-loaded">User Data Not Yet Loaded</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    status: state.statusReducer
  }
}

export default connect(mapStateToProps)(Status)
