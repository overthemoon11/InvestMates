import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import logo from '../assets/images/logo_noBackg.png';
import characterLeft from '../assets/images/character1.png';
import characterRight from '../assets/images/character2.png';
import './signIn.css';


export const SignIn=()=>{

    const { signIn } = useAuth();
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        signIn(); 
        navigate('/Academy/BeginnerBasic'); 
    };

    
    useEffect(() => {
        document.title = "InvestMates | Sign In"; 

        document.body.style.backgroundColor = "#FDF3F9";

        return () => {
            document.body.style.backgroundColor = ""; // Assuming white is default
        };

    }, []);

    
    return (
  
        <div>

            <div className="logoContainer">
                <div className='logo'>
                    <img src={logo} alt="Website Logo" />
                </div>
            </div>


            <div className = "SignInMain">

                <div>
                    <img class = "floatleft" src={characterLeft}/>
                </div>


                <div class ="login-container">
                
                    <div class = "login-box">

                        <h2>Sign In</h2>
            
                        <form onSubmit={handleSubmit}>
                            <div class = "input-group">
                                <label for = "email">Email Address</label>
                                  <input type = "email" id="email"  placeholder="Enter Your Email Address" required></input>
                            </div>

                            <div class = "input-group">
                                <label for = "password">Password</label>
                                <input type = "password" id="password"  placeholder="Enter Your Password" required></input>
                            </div>

                            <div class = "checkbox-group">
                                <input type = "checkbox" id="rmbrMe"></input>
                                <label for = "Remember Me">Remember Me</label>

                            </div>

                            <div class="Register">
                                
                            </div>
                            <Link className="registerLink" to='/General/register'>Don't have an account ? Register Now</Link>
                            <button type="submit" class = "sign-in-button">Sign In</button>                    
                        </form>
                    </div>

                </div>

                <div>
                    <img class = "floatright" src={characterRight}/>
                </div>

            </div>

        </div>
       
    )

};