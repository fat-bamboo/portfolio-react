import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import splitbee from "@splitbee/web";

splitbee.init({
  token: 'IUM4YFFD0ZMR',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
