import React, { useContext } from 'react';
import { UserContext } from '../../App';

// improt firebase
import firebase from "firebase/app";

// improt styleSheet
import './Profile.css'
import { Link } from 'react-router-dom';

const Profile = () => {
    // consume UserContext from App
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    // handle logout from the device
    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            console.log('successful')
          }).catch((error) => {
            console.log(error)
          });
        const newUser = {...loggedInUser};
        newUser.isSignedIn = false;
        newUser.email = '';
        setLoggedInUser(newUser);
    }
    return (
        <div className='Profile'>
            <div className="profile-info">
                {
                    loggedInUser.displayName ?
                        <h2>Welcome, {loggedInUser.displayName}!</h2> :
                        <h2>Hi, Anonymous!</h2>
                }
                <h3>Your Email is: {loggedInUser.email}</h3>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Profile; //exported to Header