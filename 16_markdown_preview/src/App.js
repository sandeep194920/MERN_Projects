import './App.css'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'

// prettier-ignore
const initialMarkdown = `
## Markdown Preview
#### This is heading 4
##### This is heading 5
###### This is heading 6
This is a paragraph
`
function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article>
          {/* <ReactMarkdown children={markdown} /> */}
          {/* OR */}
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}
export default App
