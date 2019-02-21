import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadNews } from './redux/actions/index.actions'

class News extends Component {
  componentDidMount() {
    if (!this.props.news.isLoaded) {
      this.props.loadNews()
    }
  }

  render() {
    if (this.props.news.isLoaded) {
      return (
        <ul>
          {this.props.news.data.map((item, key) => (
            <li key={key}>{item.title}</li>
          ))}
        </ul>
      )
    } else {
      return <div>Loading</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    news: state.newsReducer
  }
}

export default connect(
  mapStateToProps,
  { loadNews }
)(News)
