// Both of these Sliders work the same way

// import Slider from './SliderUsingUseEffect'   // For this, we are using useEffect to change the slides to left or right on btn click
import React from 'react'
import Slider from './SliderUsingHandlerFunctions' // For this, we are using left/right handler functions to change the slides to left or right on btn click

function App() {
  return <Slider />
}

export default App
