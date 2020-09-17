import React, { useContext } from 'react'
import { ModeContext } from '../contexts/ModeContext'

function Info() {
  const { mode, getModeProperty } = useContext(ModeContext)

  const platformKey = navigator.platform === 'MacIntel' ? '⌘' : 'ctrl'
  const color = { color: getModeProperty(mode, 'style').backgroundColor }

  return (
    <p className="app__info">
      Press ({platformKey} + i) to declare a placeholder |{' '}
      <a href={getModeProperty(mode, 'docs')} style={color}>
        More info
      </a>
    </p>
  )
}

export default Info
