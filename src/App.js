// import styleSheets
import './App.css';

// import react router components
import { Switch, Route, useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

// import custom components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

// import background image
import bgImage from './images/homeBg.png'

// import hooks
import { createContext } from 'react';
import { useState } from 'react';

// useContext hook to provide tickets api data
export const UserContext = createContext();

function App() {

  // // useState to hold the background property
  // const [bg, setBg] = useState({
  //   background: `url(${bgImage}) no-repeat`,
  //   backgroundSize: '100vw',
  //   height: '100vh',
  //   width: '100vw',
  //   float: 'left'
  // });

  const history = useHistory();
  console.log(history)

  // useState hook to set loggedInUser data

  const [loggedInUser, setLoggedInUser] = useState([]);

  // useState hook to set fetched data from api
  const [tickets, setTickets] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, tickets, setTickets]}>
      <div >
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute path='/destination'>
              <Destination />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/Contact'>
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
