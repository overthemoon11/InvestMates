import React from 'react';
import logo from '../../assets/images/logohorizontal.png';
import logo2 from '../../assets/images/logovertical.png';
import './Header.css';
import DropdownMenu from './DropdownMenu';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Website Logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="dropdown">
                        <a href="#academy">Academy</a>
                        <div className="dropdown-content">
                           <a href="#beginner-basics">Beginner Basics</a>
                           <a href="#capital-market">Capital Market and Their Functioning</a>
                           <a href="#evaluate-stocks">How to Evaluate Stocks</a>
                           <a href="#financial-intermediaries">All About Financial Intermediaries</a>
                           <a href="#online-trading">Essential About Online Trading</a>
                           <a href="#view-all">VIEW ALL</a>
                        </div>
                    </li>
                    <li><a href="#simulator">Simulator</a></li>
                    <li><a href="#counselling">Counselling</a></li>
                    <li className="dropdown">
                        <a href="#news" className="news">News</a>
                        <div className="dropdown-content">
                            <a href="#news-financial">Financial</a>
                            <a href="#news-companies">Companies</a>
                            <a href="#news-crypto">Crypto</a>
                            <a href="#news-government">Government</a>
                        </div>
                    </li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
            
            <div className="user">
                <div className="logout">
                <button id="logout-btn">Log Out</button>
                </div>
                <div className='profile'>
                <button id="profile-btn"><img src={logo2} alt="Website Logo" /></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
