import React, { useEffect, useState } from 'react'
import data from './data'

function RandomText() {
  const [numberOfParas, setNumberOfParas] = useState(1)
  const [copied, setCopied] = useState(false)
  const [text, setText] = useState([])
  const [showParaNumber, setShowParaNumber] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let paras = data.slice(0, numberOfParas)
    // using while loop here as we need to show data more than data we have
    while (numberOfParas > paras.length) {
      paras = [...paras, ...data.slice(0, numberOfParas - paras.length)]
    }
    setText(paras)
  }

  const handleCopy = () => {
    const copyData = text.join('')
    navigator.clipboard.writeText(copyData)
    setCopied((oldCopy) => !oldCopy)

    // after 6 seconds, the copy green check box will go away
    const timeout = setTimeout(() => {
      setCopied(false)
    }, [6000])

    return () => clearTimeout(timeout)
  }

  // when this component loads initially, we should have one para
  useEffect(() => {
    setText(data.slice(0, 1))
  }, [])

  const copyBtn = copied ? (
    <button className="copied">Copied &#x2713;</button>
  ) : (
    <button onClick={handleCopy} className="copy-btn">
      Copy
    </button>
  )

  return (
    <article>
      <nav>
        <h1>Random Text Generator</h1>
      </nav>
      <section className="section-center">
        <h3>Number of Paragraphs:</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={numberOfParas}
            onChange={(e) => setNumberOfParas(e.target.value)}
            min="1"
            type="number"
          />
          <button>Generate</button>
        </form>
        {copyBtn}
        <div className="show-hide">
          <button
            onClick={() => setShowParaNumber((pre) => !pre)}
            className={!showParaNumber ? 'selected' : ''}
          >
            Hide Para Number
          </button>
          <button
            onClick={() => setShowParaNumber((pre) => !pre)}
            className={showParaNumber ? 'selected' : ''}
          >
            Show Para Number
          </button>
        </div>
      </section>

      {showParaNumber && (
        <section className="message">
          <p>
            Para number is shown here but will <b>not be copied</b> when you
            click Copy button
          </p>
        </section>
      )}

      <section className="text-container">
        {text &&
          text.map((para, index) => {
            return (
              <p key={index}>
                {showParaNumber && `${index + 1}. `}
                {para}
              </p>
            )
          })}
      </section>
    </article>
  )
}

export default RandomText
