import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Colors } from './App'

// We can either define type or interface

// prop type
// type SingleColorProps = {
//   color:Colors
// }

// prop interface
interface SingleColorProps {
  color: Colors
  setCopiableIndex: Dispatch<SetStateAction<number | null>>
  copiable: boolean
  index: number
}

function SingleColor({
  color,
  setCopiableIndex,
  copiable,
  index,
}: SingleColorProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopied(true)
    setCopiableIndex(index)
  }

  // if copied changes to true then this effect runs and after 3 seconds, the setCopied set to false so that the message disappears
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div
      style={{ backgroundColor: `#${color.hex}` }}
      className="color"
      onClick={() => handleCopy(`#${color.hex}`)}
    >
      <p style={{ color: color.type === 'shade' ? 'white' : 'black' }}>
        #{color.hex}
      </p>
      <p style={{ color: color.type === 'shade' ? 'white' : 'black' }}>
        {copiable && copied && 'Copied to Clipboard'}
      </p>
    </div>
  )
}

export default SingleColor
