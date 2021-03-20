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

// import styleSheet
import './Login.css'

// import images
import googleIcon from '../../images/googleIcon.png'
import facebookIcon from '../../images/fbIcon.png'

const Login = () => {


    // initialization of firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    // consume userContext data from App
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useEffect(() => {
    //     // change the App component background
    //     const newBg = {
    //         background: 'red',
    //         backgroundSize: '100vw',
    //         height: '100vh',
    //         width: '100vw',
    //         float: 'left'
    //     }
    //     setBg(newBg);
    // },[])

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
                console.log(from)

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
        console.log(loggedInUser)
        newUserInfo.isSignedIn = true;
        setLoggedInUser(newUserInfo)
    }

    const handleSignUp = () => {
        const newUserInfo = { ...loggedInUser };
        newUserInfo.isSignedIn = false;
        setLoggedInUser(newUserInfo)
    }

    const handleLoginSubmit = (e) => {
        console.log(loggedInUser)
        firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                history.replace(from);
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

        e.preventDefault();
        console.log(loggedInUser)

    }


    return (
        <div className='Login'>
            <div className='emailLogin'>

                {
                    loggedInUser.isSignedIn ?
                        <form onSubmit={handleLoginSubmit }>
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
                            <input type="text" name="displayName" placeholder='Name' onBlur={handleBlur} id="" />
                            <br />
                            <input type="text" name="email" placeholder='Username or Email' onBlur={handleBlur} id="" />
                            <br />
                            <input type="password" name="password" placeholder='Password' onBlur={handleBlur} id="" />
                            <br />
                            <input type="password" name="password" placeholder='Confirm Password' onBlur={handleBlur} id="" />
                            <br />
                            <input className='inputButton' type="submit" value='Create an account'></input>

                            <div className='signupInfo'>
                                <p>Already registered?</p>
                                <span onClick={handleLogin}>Login</span>
                            </div>
                        </form>
                }
                {
                    loggedInUser.error && <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                }
                {
                    loggedInUser.successful && <p style={{ color: 'green' }}>{loggedInUser.successful}</p>
                }
            </div>
            
            <div className="socialLogin">
                <div className="icon">
                    <img src={googleIcon} alt=""/>
                </div>
                <div className="button">
                    <p onClick={handleGoogleSignIn}>Google Sign in</p>
                </div>
            </div>


        </div>
    );
};

export default Login;