import Switch from 'react-bootstrap/esm/Switch';
import { Route, Router } from 'react-router';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/destination'>
          <Destination
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
