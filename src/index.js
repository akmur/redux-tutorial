import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import User from './User'
import News from './News'
import Status from './Status'
import { Provider } from 'react-redux'
import store from './redux/stores/index.stores'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App__status">
          <Status />
        </div>
        <div className="App__user">
          <User />
        </div>
        <div className="App__news">
          <News />
        </div>
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
