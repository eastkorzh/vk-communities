import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './containers/App'
import rootReducer from './reducers'
import rootSaga from './rootSaga'
import './styles/index.sass'
import './styles/toggle2.css'


const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
)

sagaMiddleware.run(rootSaga)
// const action = type => store.dispatch({type})

ReactDOM.render(
    <Router>
      <Provider store={store}>
          <App />
      </Provider>
    </Router>,
    document.getElementById('root')
  )