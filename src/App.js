// import styleSheets
import './App.css';

// import react router components
import { Switch, Route, useHistory, useParams } from 'react-router-dom';
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

// useContext hook for Location data
// export const LocationContext = createContext();

// ==============================
// ==============================


function App() {

  // consume UserContext api data from App
  // const [tickets, setTickets] = useContext(UserContext);

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

  // const history = useHistory();
  // console.log(history)
  // const url = window.location.pathname;
  useEffect(() => {
    //=========

    //=========
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
  const data = [{
    ticketName: "ONE TIME TICKET",
    ticketPrice: 100,
    ticketBackground: "https://i.imgur.com/gFxVE2Y.png"
  },
  {
    ticketName: "ONE DAY PASS",
    ticketPrice: 500,
    ticketBackground: "https://i.imgur.com/VANKF8z.png"
  },
  {
    ticketName: "MONTHLY PASS",
    ticketPrice: 1500,
    ticketBackground: "https://i.imgur.com/d7xONME.png"
  },
  {
    ticketName: "ANNUAL PASS",
    ticketPrice: 9000,
    ticketBackground: "https://i.imgur.com/bBquyB9.png"
  }
  ]
  useEffect(() => {
    setTickets(data);
  }, []);



  return (
    // <LocationContext.Provider value={[places, setPlaces, placeName, setPlaceName]}>
    // <SingleTicketContext.Provider value={[singleTicket, setSingleTicket]}>

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div style={bg}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home tickets={[tickets, setTickets]} />
            </Route>
            <PrivateRoute path='/destination'>
              <Destination background={[bg, setBg]} />
            </PrivateRoute>
            <Route path='/login'>
              <Login background={[bg, setBg]} />
            </Route>
            <Route path='/blog'>
              <Blog background={[bg, setBg]} />
            </Route>
            <Route path='/Contact'>
              <Contact background={[bg, setBg]} />
            </Route>
            <PrivateRoute path='/profile'>
              <Profile background={[bg, setBg]} />
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
