import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <div className="fb-header">
            <div className="header-inner">
                <div className="logo">facebook</div>
                <div className="header-menu">
                    <a href="#">Home</a>
                    <a href="#">Profile</a>
                    <a href="#">Friends</a>
                    <a href="#">Inbox</a>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    );
}

export default Header;
