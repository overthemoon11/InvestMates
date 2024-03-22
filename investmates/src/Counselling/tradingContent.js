import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import HarianBank_Logo from '../assets/images/HarianBank_Logo.png';
import './RightComp.css'; 


const TradingComponent = () => {

    const navigate = useNavigate();
    const handleRegisterClick = () => {
        console.log('Attempting to navigate to /Counselling/partnerWebsite');
        navigate('/Counselling/partnerWebsite'); 
      };
      
    
    
    return (

        <div class = "ContentWrapper">
    
            <article id="trading-content" className="content-article">
                        
                        <h4>Simple Trading</h4>

                        <div className="course-details">  

                            <div className = "course">     
                                <div className="course-image">
                                    <img src={HarianBank_Logo} alt="HarianBnkLogo" width="150" height="150" />
                                </div>

                                <div className = "course-info">
                                    <p>
                                        <strong>Price:</strong> <span style={{ marginLeft: '10px', color: '#1B694D',fontSize: '22px' }}>Free</span>
                                    </p>
                                     <p>
                                        <strong>Platform:</strong> <span style={{  marginLeft: '10px',color: '#4B679F' }}>Harian Banking</span>
                                    </p>
                                    <button  type = "button" className ="registerLinkBtn-Begin" onClick={handleRegisterClick}>REGISTER NOW</button>  
                                </div> 
                             </div> 

                           
                        </div>

                        <div className= "course-overview">
                            <h6>Overview</h6>
                            <p> This course is your gateway to unlocking the mysteries of trading, crafted specifically for beginners seeking clarity in the markets. Led by seasoned experts, you'll unravel the intricacies of trading, from deciphering market signals to executing savvy trades. Build your confidence and refine your techniques to navigate the trading landscape with finesse. Join us today and set sail on your path to trading mastery!</p>
                    
                            <h6 className = "special-h6">What You Might Learn ?</h6>
                            <ul className="course-learn">
                                <li>Understand the fundamental principles that underpin successful trading strategies</li>
                                <li>Learn how to read and interpret market charts to make informed trading decisions</li>
                            </ul>

                        </div>

                </article>

            </div>    
    );
};

export default TradingComponent;
