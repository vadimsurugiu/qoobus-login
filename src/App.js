import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import './App.sass'
import Welcome from './Components/Welcome/Welcome'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home'

function App() {
  const isLogged = useSelector(state => state.isLogged)

  useEffect(() => {
    console.log(isLogged);
    console.log(localStorage.getItem('isLogged'));
  }, [isLogged])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {isLogged === 'true' ? (
            <Home />
          ) : (
            <Welcome />
          )}
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
