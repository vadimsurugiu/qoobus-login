import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.sass'
import Welcome from './Components/Welcome/Welcome'
import Register from './Components/Register/Register'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
      </Switch>  
    </Router>
    
  );
}

export default App;
