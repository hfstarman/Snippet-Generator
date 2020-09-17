import React, { useContext, useEffect } from 'react'
import Clipboard from 'clipboard'
import { ModeContext } from '../contexts/ModeContext'

function SnippetOutput() {
  const { mode, updateMode, getModeProperty, getModeNames } = useContext(
    ModeContext
  )

  useEffect(() => {
    new Clipboard('.app__btncopy')
  }, [])

  const ModeButtonsJSX = getModeNames().map((modeName) => {
    const additionalStyle =
      modeName === mode ? getModeProperty(mode, 'style') : {}
    return (
      <button
        key={modeName}
        className="app__topbtn"
        onClick={() => updateMode(modeName)}
        style={additionalStyle}
      >
        {modeName}
      </button>
    )
  })

  return (
    <div className="app__half">
      <div className="app__halftop">{ModeButtonsJSX}</div>

      <div className="app__halfbottom">
        {getModeProperty(mode, 'component')}

        <button
          className="app__btncopy app__bottombtn"
          data-clipboard-target=".app__pre"
          style={getModeProperty(mode, 'style')}
        >
          Copy snippet
        </button>
      </div>
    </div>
  )
}

export default SnippetOutput
