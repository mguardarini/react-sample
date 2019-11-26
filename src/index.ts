import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import InitRedux from './init-redux'

import Features from './features'

const store = InitRedux()

render(
  <Provider store={store}>
    <Features />
  </Provider>,
  document.getElementById('root'),
)
