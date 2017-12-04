import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const data = {}
ReactDOM.render(<App data={data} initialValue="facebook" />, document.getElementById('root'))
