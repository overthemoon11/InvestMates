import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftCompt.css'; 

const LeftComponent = () => {

    return (
      <div className ="CounLeftCompt">
      <h2>Counselling</h2>
      <nav className="CounsellingLeft-nav"> 
         <div className= "classify">
            <h4>TOP PICKS</h4>
               <ul>
                <li><Link to="/Counselling/beginning" className="menu-item">Stock Market for Beginners</Link></li>
                <li><Link to="/Counselling/trading" className="menu-item">Simple Trading</Link></li>
               </ul>
         </div>

         <div className = "classify">
         <h4>RECOMMENDATION</h4>
               <ul>
                  <li><Link to="/stocks" className="menu-item">Stocks & Investing</Link></li>
               </ul>
         </div>

         <div className = "classify">
            <h4>OTHERS</h4>
         </div>
         
      </nav>
   </div>
);
};

export default LeftComponent;


