import React from 'react';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';

const Header = () => {
    // // consume UserContext data
    // const [loggedInUser] = useContext(UserContext);

    return (
        <div className='header'>
            <div className="logoHolder">
                <img src="../../../images/metroLogo.png" alt="Metro Spire" />
            </div>
            <div className="navigation">
                <Link to='/'>Home</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;