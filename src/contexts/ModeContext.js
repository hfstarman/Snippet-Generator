import React, { useState } from 'react'
import VSCode from '../components/VSCode'
import Atom from '../components/Atom'
import Sublime from '../components/Sublime'

const ModeContext = React.createContext()

function ModeProvider(props) {
  const [mode, setMode] = useState('VSCode')

  const allModeProperties = {
    VSCode: {
      style: { backgroundColor: '#006eb4' },
      component: <VSCode />,
      docs: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
    },
    Atom: {
      style: { backgroundColor: '#40a977' },
      component: <Atom />,
      docs: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    },
    Sublime: {
      style: { backgroundColor: '#F59821' },
      component: <Sublime />,
      docs:
        'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
    },
  }

  const getModeNames = () => {
    return Object.keys(allModeProperties)
  }

  const validateMode = (mode) => {
    const possibleModeKeys = getModeNames()
    const isValid = possibleModeKeys.some((posMode) => posMode === mode)
    if (!isValid) throw Error(`${mode} is not a valid mode`)
  }

  const getModeProperty = (mode, property) => {
    validateMode(mode)
    return allModeProperties[mode][property]
  }

  const updateMode = (mode) => {
    validateMode(mode)
    setMode(mode)
  }

  return (
    <ModeContext.Provider
      value={{ mode, getModeNames, getModeProperty, updateMode }}
    >
      {props.children}
    </ModeContext.Provider>
  )
}

export { ModeProvider, ModeContext }
