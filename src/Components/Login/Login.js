import React from 'react';

// import firebase components
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'

// import react hooks
import { useContext } from 'react';

// import custom context
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    // initialization of firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    // consume userContext data
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // get data to redirect from login page
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // Create an instance of the Google provider object
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // google sign in handler
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from)

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }


    return (
        <div>
            <h3>This is login</h3>
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;