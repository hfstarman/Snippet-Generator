import React, { useContext } from 'react'
import { ModeContext } from './contexts/ModeContext'
import SnippetInput from './components/SnippetInput'
import SnippetOutput from './components/SnippetOutput'
import Header from './components/Header'

function App() {
  const { mode, getModeProperty } = useContext(ModeContext)

  return (
    <div>
      <div
        className={`app app--${mode}`}
        style={getModeProperty(mode, 'style')}
      >
        <Header />
        <div className="app__main">
          <SnippetInput />
          <SnippetOutput />
        </div>
      </div>
    </div>
  )
}

export default App
