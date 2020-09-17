import React, { useContext } from 'react'
import { InputContext } from '../contexts/InputContext'
import { html } from 'common-tags'

function VSCode() {
  const { inputs } = useContext(InputContext)

  const renderSnippet = (inputs) => {
    const { snippet, description, tabTrigger } = inputs

    //escape " with \"
    //split lines by line-break
    const separatedSnippet = snippet
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .split('\n')
    const sepLength = separatedSnippet.length

    //add double quotes around each line apart from the last one
    const newSnippet = separatedSnippet.map((line, index) => {
      return index === sepLength - 1 ? `"${line}"` : `"${line}",`
    })

    // prettier-ignore
    return html`
      "${description}": {
        "prefix": "${tabTrigger}",
        "body": [
          ${newSnippet.join('\n')}
        ],
        "description": "${description}"
      }
    `
  }

  return <pre className="app__pre">{renderSnippet(inputs)}</pre>
}

export default VSCode
