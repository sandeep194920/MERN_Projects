import { Gradient } from './Gradient.js'
import { useEffect, useRef } from 'react'

const gradient = new Gradient()
// https://whatamesh.vercel.app/
export default function App() {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      console.log(ref)
      gradient.initGradient('#gradient-canvas')
    }
  }, [ref])

  return (
    <>
      <canvas id="gradient-canvas" data-transition-in></canvas>
      <div ref={ref}></div>
    </>
  )
}
