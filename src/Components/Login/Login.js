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
import { Link } from 'react-router-dom';

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
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from);

                // get user data to set user state
                const { displayName, photoURL, email, password } = result.loggedInUser;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    password: password,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);


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

    // signout handler
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then((res) => {
                const signedOutUser = {
                    isSignedIn: false,
                    newUser: false,
                    displayName: '',
                    photo: '',
                    email: '',
                    password: '',
                    error: '',
                    successful: ''
                }
                setLoggedInUser(signedOutUser)
                console.log('sign out successful')
            }).catch((error) => {
                // An error happened.
            });

    }

    // handle submit form
    const handleRegisterSubmit = (e) => {
        if (loggedInUser.email && loggedInUser.password) {
            console.log('submited worked', loggedInUser)
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((userCredential) => {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = '';
                    newUserInfo.successful = 'User Created Successfully';
                    setLoggedInUser(newUserInfo);
                    history.replace(from);

                })
                .catch((err) => {
                    // var errorCode = error.code;
                    var errorMessage = err.message;
                    console.log(errorMessage)
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.error = errorMessage;
                    setLoggedInUser(newUserInfo);
                });
        }
        e.preventDefault();
    }


    const handleLogin = () => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = true;
        setLoggedInUser(newUserInfo)
    }

    const handleLoginSubmit = (e) => {
        firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            history.replace(from);   
            console.log(user) 
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        e.preventDefault();
    }

    // handle onBlur input
    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[e.target.name] = e.target.value;
            setLoggedInUser(newUserInfo);
        }

    }


    return (
        <div>

            {
                !loggedInUser.isSignedIn ? <button onClick={handleGoogleSignIn}>Google Sign in</button> : <button onClick={handleSignOut}>Sign Out</button>
            }

            {
                loggedInUser.isSignedIn ?
                    <form onSubmit={handleLoginSubmit}>
                        <h2>Login</h2>
                        <input type="text" name="email" placeholder='Email' onBlur={handleBlur} id="" />
                        <br />
                        <input type="password" name="password" placeholder='Password' onBlur={handleBlur} id="" />
                        <br />
                        <input type="submit"></input>
                    </form> :
                    <form onSubmit={handleRegisterSubmit}>
                        <h2>Register </h2>
                        <input type="text" name="displayName" placeholder='Name' onBlur={handleBlur} id="" />
                        <br />
                        <input type="text" name="email" placeholder='Email' onBlur={handleBlur} id="" />
                        <br />
                        <input type="password" name="password" placeholder='Password' onBlur={handleBlur} id="" />
                        <br />
                        <input type="submit"></input>
                    </form>
            }
            {
                loggedInUser.error && <p style={{ color: 'red' }}>{loggedInUser.error}</p>
            }
            {
                loggedInUser.successful && <p style={{ color: 'green' }}>{loggedInUser.successful}</p>
            }
            <p>Already registered? <span onClick={handleLogin}>Login</span></p>
        </div>
    );
};

export default Login;