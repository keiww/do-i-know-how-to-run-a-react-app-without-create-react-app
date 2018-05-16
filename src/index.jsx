import React from 'react'
import ReactDOM from 'react-dom'

const dom = document.getElementById('app')
const render = (App) => {
  ReactDOM.render(<App />, dom)
}

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('[hot reload]')
    render(require('./App').default)
  })
}

render(require('./App').default)
