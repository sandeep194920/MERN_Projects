import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import Error from './Error'
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      {/* If you want <Route/> to be self closing then use children prop to define the component */}
      <Route path="/movies/:id" children={Movies} />
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  )
}

export default App
