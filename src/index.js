import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'

import { ModeProvider } from './contexts/ModeContext'
import { InputProvider } from './contexts/InputContext'

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <InputProvider>
        <App />
      </InputProvider>
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
