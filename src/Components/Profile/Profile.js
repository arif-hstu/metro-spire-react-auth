import React, { useContext } from 'react';
import { UserContext } from '../../App';

// improt firebase
import firebase from "firebase/app";

// improt styleSheet
import './Profile.css'

let userName;
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
        const newUser = { ...loggedInUser };
        newUser.isSignedIn = false;
        newUser.email = '';
        newUser.displayName = '';
        newUser.photoURL = '';
        setLoggedInUser(newUser);
    }


    const handleBlur = (e) => {
        e.preventDefault();
        // clear error message
        const newUserInfo = { ...loggedInUser };
        newUserInfo.error = '';
        setLoggedInUser(newUserInfo);

        let isNameValid;
        if (e.target.name === 'name') {
            userName = '';
            isNameValid = /^[a-zA-Z\s]+$/.test(e.target.value);
            if (isNameValid) {
                userName = e.target.value;
                console.log('your updated name: ', userName)
            }
        }

    }
    // update information handler
    const updateInfoHandler = (e) => {
        let isSuccess;
        e.preventDefault();
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: userName
        }).then(function () {
            isSuccess = true;
            if (isSuccess && userName) {
                const newUserInfo = { ...loggedInUser };
                newUserInfo.displayName = userName;
                newUserInfo.successful = 'Update Successfull';
                setLoggedInUser(newUserInfo);
                console.log('Update successful locally', userName)
                userName = '';
            }
        }).catch(function (error) {
            console.log('error occured')
        });
    }
    return (
        <div className='Profile'>
            <div className="profile-info">
                {
                    loggedInUser.displayName ?
                        <h2>Welcome, {loggedInUser.displayName}!</h2> :
                        <h2>Hi, Anonymous!</h2>
                }

                {
                    !loggedInUser.displayName &&
                    <form onSubmit={updateInfoHandler}>
                        <input onBlur={handleBlur} placeholder='Please input you name here' type="text" name="name" id="" />
                        <input className = 'button' type="submit" value="Update Name" />
                    </form>

                }
                <img src={loggedInUser.photoURL} alt="" srcset="" />
                <h3>Your Email is: {loggedInUser.email}</h3>
                <button onClick={handleLogOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Profile; //exported to Header