import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import fakeData from '../../data/data.json';

const Header = () => {
    const [fake, fakeAllData] = useState([]);
    useEffect(() =>{
      fakeAllData(fakeData);
      console.log(fakeData);

  
    }, [])

    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;