import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';

function Navbar() {
    const [itemClicked, setItemClicked] = useState(false);
    const highlightItem = () => setItemClicked(!itemClicked);

    return (
        <div>
            <div className='top-menu-bar'>
                <h2 className='title'>Spotify history analytics</h2>
            </div>
            <nav>
                <ul className='nav-menu-items'>
                    {NavbarData.map((item, index) => {
                        return (
                            <li 
                                key={index} 
                                onClick={highlightItem} 
                                className='nav-item' 
                                id={window.location.pathname === item.path ? "active" : ""}
                            >
                                <Link to={item.path}>
                                    <span id='menu-icon'>{item.icon}</span>
                                    <span id='menu-title'>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })};
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
