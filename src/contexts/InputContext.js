import React, { useState, useRef, useEffect } from 'react'

const InputContext = React.createContext()

function InputProvider(props) {
  const [inputs, setInputs] = useState({
    snippet: '',
    description: '',
    tabTrigger: '',
  })

  const textareaRef = useRef()

  // Listen for specific key inputs
  useEffect(() => {
    const handleKeydown = (e) => {
      //tab key (when snippet input is active)
      const isSnipInputActive = document.activeElement === textareaRef.current
      if (e.keyCode === 9 && isSnipInputActive) {
        handleSpecialKeys(e, 'tab')
      }
      // Ctrl + i (when snippet is active)
      if (e.keyCode === 73 && (e.ctrlKey || e.metaKey) && isSnipInputActive) {
        handleSpecialKeys(e, 'ctrl+i')
      }
    }
    console.log('rerender')
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const handleSpecialKeys = (e, keys) => {
    e.preventDefault()
    const { selectionStart } = textareaRef.current
    const { selectionEnd } = textareaRef.current

    const currentText = textareaRef.current.value
    const strBeforeSelection = currentText.substring(0, selectionStart)
    const strAfterSelection = currentText.substring(
      selectionEnd,
      currentText.length
    )

    const keysInfo = {
      tab: {
        strBetween: '  ',
        newStart: selectionStart + 2,
        newEnd: selectionStart + 2,
      },
      'ctrl+i': {
        strBetween: `\${1:example}`,
        newStart: selectionStart + 4,
        newEnd: selectionStart + 11,
      },
    }

    const { strBetween, newStart, newEnd } = keysInfo[keys]
    const newText = `${strBeforeSelection}${strBetween}${strAfterSelection}`

    textareaRef.current.value = newText
    textareaRef.current.selectionStart = newStart
    textareaRef.current.selectionEnd = newEnd

    onInput(e)
  }

  const onInput = (e) => {
    const { name, value } = e.target

    const newInputs = { ...inputs }
    newInputs[name] = value
    setInputs(newInputs)
  }

  return (
    <InputContext.Provider value={{ inputs, textareaRef, onInput }}>
      {props.children}
    </InputContext.Provider>
  )
}

export { InputProvider, InputContext }
