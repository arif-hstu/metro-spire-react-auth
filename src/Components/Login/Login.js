import React from 'react';
import { useHistory, useLocation } from 'react-router';

// import firebase components
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'

// import react hooks
import { useContext } from 'react';

// import custom context
import { UserContext } from '../../App';

// import styleSheet
import './Login.css'

// import images
import googleIcon from '../../images/googleIcon.png'

let userName;
let userEmail;
let userPassword;
let isMatched;

const Login = () => {
    // initialization of firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    // consume userContext data from App
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
                const { displayName, photoURL, email, password } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    password: password,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);

                history.replace(from);

            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                const newUserInfo = { ...loggedInUser };
                newUserInfo.error = errorMessage;
                setLoggedInUser(newUserInfo);
            });
    }

    // handle onBlur input
    const handleBlur = (e) => {
        e.preventDefault();
        // clear error message
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = '';
        setLoggedInUser(newUserInfo);

        let isNameValid;
        let isEmailValid;
        let isPasswordValid;
        if (e.target.name === 'name') {
            isNameValid = /^[a-zA-Z]+$/.test(e.target.value);
            if (isNameValid) {
                userName = e.target.value;
            }
        }
        if (e.target.name === 'email') {
            isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (isEmailValid) {
                userEmail = e.target.value;
            }
        }
        if (e.target.name === 'password') {
            const isPasswordLengthValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isPasswordValid = isPasswordLengthValid && passwordHasNumber;
            if (isPasswordValid) {
                userPassword = e.target.value;
            }
        }
    }

    // handle password match
    const handleMatch = (e) => {
        e.preventDefault();
        // clear error message if any
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = '';
        setLoggedInUser(newUserInfo);
        if (userPassword === e.target.value) {
            isMatched = true;
        } else {
            const newUserInfo = { ...loggedInUser };
            newUserInfo.error = 'Your password didn\'t match!';
            setLoggedInUser(newUserInfo);
        }
    }

    // handle submit form
    const handleRegisterSubmit = (e) => {
        let isSuccess;
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                isSuccess = true;
                if (isSuccess && userEmail && userPassword && isMatched) {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.email = userEmail;
                    newUserInfo.password = userPassword;
                    newUserInfo.displayName = userName;
                    newUserInfo.successful = 'Registration Successfull';
                    setLoggedInUser(newUserInfo);

                    userEmail = '';
                    userPassword = '';
                    userName = '';
                    isMatched = false;

                    history.replace(from);
                }
            })
            .catch((err) => {
                // var errorCode = error.code;
                const errorMessage = err.message;
                const newUserInfo = { ...loggedInUser };
                newUserInfo.error = errorMessage;
                setLoggedInUser(newUserInfo);
            });
    }


    const handleLogin = () => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = true;
        setLoggedInUser(newUserInfo)
    }

    const handleSignUp = () => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = false;
        setLoggedInUser(newUserInfo)
    }

    const handleLoginSubmit = (e) => {
        let isSuccess;
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then((userCredential) => {
                isSuccess = true;
                if (isSuccess && userEmail && userPassword) {
                    const newUserInfo = { ...loggedInUser };
                    newUserInfo.email = userEmail;
                    newUserInfo.password = userPassword;
                    newUserInfo.successful = 'User Created Successfully';
                    setLoggedInUser(newUserInfo);

                    userEmail = '';
                    userPassword = '';
                    userName = '';
                    isMatched = false;

                    history.replace(from);
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                const newUserInfo = { ...loggedInUser };
                newUserInfo.error = errorMessage;
                setLoggedInUser(newUserInfo);
            });
    }

    return (
        <div className='Login'>
            <div className='emailLogin'>
                {
                    loggedInUser.isSignedIn ?
                        <form onSubmit={handleLoginSubmit}>
                            <h4>Login</h4>
                            <input type="text" name="email" placeholder='Email' onBlur={handleBlur} id="" />
                            <br />
                            <input type="password" name="password" placeholder='Password' onBlur={handleBlur} id="" />
                            <br />
                            <input className='inputButton' type="submit" value='Login'></input>

                            <div className='signupInfo'>
                                <p>Don't have an account?</p>
                                <span onClick={handleSignUp}>Create an account</span>
                            </div>
                        </form> :
                        <form onSubmit={handleRegisterSubmit}>
                            <h4>Create an account </h4>
                            <input type="text" name="name" placeholder='Name' onBlur={handleBlur} id="" />
                            <br />
                            <input type="text" name="email" placeholder='Username or Email' onBlur={handleBlur} id="" />
                            <br />
                            <input type="password" name="password" placeholder='Password' onBlur={handleBlur} id="" />
                            <br />
                            <input type="password" name="password" placeholder='Confirm Password' onBlur={handleMatch} id="" />
                            <br />
                            <input className='inputButton' type="submit" value='Create an account'></input>

                            <div className='signupInfo'>
                                <p>Already registered?</p>
                                <span onClick={handleLogin}>Login</span>
                            </div>
                        </form>
                }
                {
                    loggedInUser.error && loggedInUser.name && <p style={{ color: 'red', fontSize: '12px' }}>{loggedInUser.error}</p>
                }
            </div>

            <div className="socialLogin">
                <div className="icon">
                    <img src={googleIcon} alt="" />
                </div>
                <div className="button">
                    <p onClick={handleGoogleSignIn}>Google Sign in</p>
                </div>
            </div>
        </div>
    );
};

export default Login; // exported to App