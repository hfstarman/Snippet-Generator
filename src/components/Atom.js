import React, { useContext } from 'react'
import { InputContext } from '../contexts/InputContext'
import { html } from 'common-tags'

function Atom() {
  const { inputs } = useContext(InputContext)

  const renderSnippet = (inputs) => {
    const { snippet, description, tabTrigger } = inputs

    // prettier-ignore
    return html`
      '${description}':
        'prefix': '${tabTrigger}'
        'body': """
          ${snippet}
        """
    `
  }

  return <pre className="app__pre">{renderSnippet(inputs)}</pre>
}

export default Atom
