import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import './App.css'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
