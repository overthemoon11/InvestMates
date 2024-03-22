import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import investYourselfLogo from '../assets/images/investYourself.png';
import './RightComp.css'; 


const BeginnerComponent = () => {

    const navigate = useNavigate();
    const handleRegisterClick = () => {
        console.log('Attempting to navigate to /Counselling/partnerWebsite');
        navigate('/Counselling/partnerWebsite'); 
      };
      
    
    
    return (

        <div class = "ContentWrapper">
    
            <article id="beginners-content" className="content-article">
                        
            <h4>Stock Market for Beginners</h4>
                        
                        <div className="course-details">
                            <div className = "course">

                            <div className="course-image">
                                <img src={investYourselfLogo} alt="Invest Yourself" width="150" height="150"/>
                            </div>

                            <div className = "course-info">
                            <p>
                                <strong>Price:</strong> <span style={{ marginLeft: '10px', color: '#4B679F' }}>RM560</span>
                            </p>
                            <p>
                                <strong>Platform:</strong> <span style={{  marginLeft: '10px',color: '#4B679F' }}>INVEST Yourself</span>
                            </p>
                            <button  type = "button" className ="registerLinkBtn-Begin" onClick={handleRegisterClick}>REGISTER NOW</button>  
                            </div>

                        </div>
                            
                        </div>

                        <div className = "course-overview">
                            <h6>Overview</h6>
                            <p>Introducing "Stock Market for Beginners" – your essential guide to navigating the world of investing. This comprehensive course breaks down the complexities of the stock market into easily digestible lessons tailored for novice investors. Led by seasoned instructors, you'll learn the fundamentals, from understanding market dynamics to crafting your investment strategy. Gain the confidence and knowledge needed to take control of your financial future. Join us and embark on your journey to financial empowerment today!</p>

                            <h6 className = "special-h6">What You Might Learn ?</h6>
                            <ul className="course-learn">
                                <li>What Is Market Trend</li>
                                <li>How To Analysis Market Trend</li>
                            </ul>
                    
                        </div>
    
                    </article>

            </div>    
    );
};

export default BeginnerComponent;
