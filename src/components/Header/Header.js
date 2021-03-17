import React, { useContext, useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import fakeData from '../../data/data.json';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [fake, fakeAllData] = useState([]);
    useEffect(() =>{
      fakeAllData(fakeData);
      console.log(fakeData);  
    }, [])

    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={() => setLoggedInUser({})}>Sign out</button>
            </nav>
        </div>
    );
};

export default Header;