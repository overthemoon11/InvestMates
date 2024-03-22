import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import investYourselfLogo from '../assets/images/investYourself.png';
import HarianBank_Logo from '../assets/images/HarianBank_Logo.png';
import './RightComp.css'; 



const RightComponent = () => {
    const [activeSection, setActiveSection] = useState('beginners');

    const navigate = useNavigate();
    const handleRegisterClick = () => {
        console.log('Attempting to navigate to /Counselling/partnerWebsite');
        navigate('/Counselling/partnerWebsite'); 
      };
      
    

    return (

        <div className="counsellingPageContainer">
           
            <div className="rightContent">

                <div className ="category">

                    <h3>TOP PICKS</h3>

                    <article id="beginners-content" className={`content-article ${activeSection === 'beginners' ? 'active' : ''}`}>
                        
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
       
                    <article id="trading-content" className={`content-article ${activeSection === 'trading' ? 'active' : ''}`}>
                        
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
                                    <button onClick={handleRegisterClick} className ="registerLinkBtn">REGISTER NOW</button> 
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

            
        
        </div>

    </div>
    );
};

export default RightComponent;
