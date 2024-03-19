import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logohorizontal.png';
import logo2 from '../../assets/images/logovertical.png';
import './NavBar.css';

export const NavBar=()=> {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Website Logo" />
      </div>
      <nav className='nav-links'>
        <div className="dropdown">
          <Link className='link'>Academy</Link>
          <div className="dropdown-content">
            <Link to="./Academy/BeginnerBasics">Beginner Basics</Link>
            <Link to="/Academy/CapitalMarket">Capital Market and Their Functioning</Link>
            <Link to="/Academy/EvaluateStock">How to Evaluate Stocks</Link>
            <Link to="/Academy/FinancialIntermediates">All About Financial Intermediaries</Link>
            <Link to="/Academy/OnlineTrading">Essential About Online Trading</Link>
            <Link to="/Academy/ViewAll">VIEW ALL</Link>
          </div>
        </div>
        <Link to="/Simulator/simulator" className='link'>Simulator</Link>
        <Link to="/Counselling/counselling" className='link'>Counselling</Link>
        <div className="dropdown">
          <Link className='news'>News</Link>
          <div className="dropdown-content">
            <Link to="/News/Financial">Financial</Link>
            <Link to="/News/Company">Companies</Link>
            <Link to="/News/Crypto">Crypto</Link>
            <Link to="/News/Government">Government</Link>
          </div>
        </div>
        <Link to="/About/about" className='link'>About</Link>
      </nav>
      <div className='user'>
          <button className="logout" id="logout-btn">Log Out</button>
          <button className='profile' id="profile-btn"><img src={logo2} alt="Website Logo" /></button>
      </div>
    
    </header>
    
  );
}
