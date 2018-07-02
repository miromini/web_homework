import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import { listTodo } from './actions'

const store = createStore(reducer,
        applyMiddleware(
          thunkMiddleware
        ))

store.dispatch(listTodo())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
