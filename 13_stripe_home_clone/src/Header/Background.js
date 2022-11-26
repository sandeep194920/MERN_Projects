import { Gradient } from './Gradient'
import { useEffect, useRef } from 'react'

const gradient = new Gradient()
// https://whatamesh.vercel.app/
export default function Background() {
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
