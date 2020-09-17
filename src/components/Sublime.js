import React, { useContext } from 'react'
import { InputContext } from '../contexts/InputContext'
import { html } from 'common-tags'

function Sublime() {
  const { inputs } = useContext(InputContext)

  const renderSnippet = (inputs) => {
    const { snippet, description, tabTrigger } = inputs

    const regexMagic = /(\$)([a-z(]+)([^$])/gi
    const escapedSnippet = snippet.replace(regexMagic, '\\$1$2$3')
    // prettier-ignore
    return html`
      <snippet>
        <content><![CDATA[
      ${escapedSnippet}
      ]]></content>
        <tabTrigger>${tabTrigger}</tabTrigger>
        <description>${description}</description>
      </snippet>
    `;
  }

  return <pre className="app__pre">{renderSnippet(inputs)}</pre>
}

export default Sublime
