// import styleSheets
import './App.css';

// import fakeData
import fakeData from './fakeData';

// import react router components
import { Switch, Route } from 'react-router-dom';
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
import bgImage from './images/mainBackground.jpg'

// import hooks
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Profile from './Components/Profile/Profile';

// useContext hook to provide tickets api data
export const UserContext = createContext();

function App() {
  // useState to hold the background property
  const [bg, setBg] = useState({
    background: `url(${bgImage}) no-repeat`,
    // backgroundSize: '100vw',
    height: '100vh',
    width: '100vw',
    float: 'center',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  });

  useEffect(() => {
    setBg({
      background: `url(${bgImage}) no-repeat`,
      backgroundSize: '100vw',
      height: '100vh',
      width: '100vw',
      float: 'left'
  })}, [])

  // useState hook to set loggedInUser data
  const [loggedInUser, setLoggedInUser] = useState([]);

  // useState hook to set fetched data from api
  const [tickets, setTickets] = useState([]);

  // fetch mock data
  useEffect(() => {
    setTickets(fakeData);
  }, []);



  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div style={bg}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home tickets={[tickets, setTickets]} />
            </Route>
            <PrivateRoute path='/destination/:ticketId'>
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
            <PrivateRoute path='/profile'>
              <Profile />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
