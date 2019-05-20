import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import App from './containers/App'
import rootReducer from './reducers'
import rootSaga from './saga'


const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
)

sagaMiddleware.run(rootSaga)
// const action = type => store.dispatch({type})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
  )