import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logohorizontal.png';
import profilePic from '../../assets/images/profilePic.png';
import './NavBar.css';

export const NavBar=()=> {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () =>{
    if (isAuthenticated) {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
      navigate('/Academy/BeginnerBasics');
    } else {
      navigate('/General/signIn');
    }
  };


  useEffect(() => {
    document.title = "InvestMates | HomePage"; 
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);


  
  return (
    
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Website Logo" />
      </div>
      
    
    <nav className='nav-links'>

      <div className="nav-item">
        <div className="dropdown">
          <Link className='link'>Academy</Link>
          <div className="dropdown-content">
            <Link to="/Academy/BeginnerBasics">Beginner Basics</Link>
            <Link to="/Academy/CapitalMarket">Capital Market and Their Functioning</Link>
            <Link to="/Academy/EvaluateStock">How to Evaluate Stocks</Link>
            <Link to="/Academy/FinancialIntermediates">All About Financial Intermediaries</Link>
            <Link to="/Academy/OnlineTrading">Essential About Online Trading</Link>
            <Link to="/Academy/ViewAll">VIEW ALL</Link>
          </div>
        </div>
      </div>


        <div className="nav-item">
         <Link to="/Simulator/simulator" className='link'>Simulator</Link>
        </div>

        <div className="nav-item">
         <Link to="/Counselling/counselling" className='link'>Counselling</Link>
        </div>


        <div className="nav-item">
         <div className="dropdown">
            <Link to ="/News" className='link'>News</Link>
               <div className="dropdown-content">
               <Link to="/News/Financial">Financial</Link>
               <Link to="/News/Company">Companies</Link>
               <Link to="/News/Crypto">Crypto</Link>
               <Link to="/News/Government">Government</Link>
               </div>
           </div>
        </div>


        <div className="nav-item">
         <Link to="/About/about" className='link'>About</Link>
        </div>
      
    </nav>

      
      <div className='user'>
      {isAuthenticated ? (
          <>
            <button className="logout" onClick={handleAuthClick}>Log Out</button>
            <img src={profilePic} alt="Profile" />
          </>
        ) : (
          <Link to="/General/signIn" className="login">Sign In</Link>
        )}
      </div>

  </header>
    
  );
}