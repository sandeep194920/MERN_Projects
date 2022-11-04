import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

// we could have used type keyword as well instead of interface,
// but using interface in this case is good practice
export interface Colors {
  alpha: number
  rgb: [number, number, number]
  type: string
  weight: number
  hex: string
  setColor(color: string): Values
  tint(weight?: number): Values
  tints(weight?: number): Values[]
  shade(weight?: number): Values
  shades(weight?: number): Values[]
  all(weight?: number): Values[]
  hexString(): string
  rgbString(): string
  getBrightness(): number
}

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  // defining this state for copiableIndex because, when one color is copied to clipboard by clicking on that color, and when immediately press another color, then `copy to clipboard` message appears on both. This is a bad user experience, hence we need this message to be appeared only on the latest copied. So implementing it through this state.
  const [copiableIndex, setCopiableIndex] = useState<number | null>(null)

  const [allColors, setAllColors] = useState<Colors[]>(
    new Values('#305252').all(10)
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let colors
    try {
      setError(false)
      colors = new Values(color).all(10)
    } catch (error) {
      setError(true)
      colors = new Values('#305252').all(10)
    }
    setAllColors(colors)
  }

  return (
    <>
      <section className="container">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? 'error' : ''}
            type="text"
            value={color}
            onChange={({ target }) => setColor(target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="color-container">
        {allColors.map((color, index) => {
          return (
            <SingleColor
              color={color}
              key={index}
              index={index}
              setCopiableIndex={setCopiableIndex}
              copiable={index === copiableIndex ? true : false}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
