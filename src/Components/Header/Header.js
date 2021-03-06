// import styleSheet
import './Header.css'
import React, { useContext } from 'react';

// import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import logo
import logo from "../../images/metroLogoDark.png";
import { DestinationContext, UserContext } from '../../App';


const Header = () => {
    // consume UserContext data from APp
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [destinationPath, setDestinationPath] = useContext(DestinationContext);

    return (
        <div className='Header'>
            <div className="main">
                <div className="logoHolder">
                    <img src={logo} alt="Metro Spire" />
                </div>
                <div className="navigation">
                    <Link to='/'>Home</Link>
                    <Link to={destinationPath || '/destination'}>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    {
                        loggedInUser.email ?
                            <Link to='/profile'>
                                <div className="name">
                                    {loggedInUser.name || 'Anonymous'}
                                </div>
                            </Link> :
                            <div className='signUpDiv' >
                                <Link to='/login'><span className='signUp'>Sign Up</span></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header; // exported to App