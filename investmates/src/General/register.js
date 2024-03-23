import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
import logo from '../assets/images/logo_noBackg.png';
import registerImage from '../assets/images/register.png'; 

export const RegistrationPage=()=>{

    const navigate = useNavigate();
    const handleRegisterClick = () => {
        navigate('/General/signIn'); 
      };
      


    useEffect(() => {
        document.title = "InvestMates | Register An Account"; 
               
    }, []);


    return (

        <div className="registrationContainer"> 

            <div className="left-section">

            <div className="logoWrapper">
                <div className='logo'>
                    <img src={logo} alt="Website Logo" />
                </div>
            </div>

                <div className = "left-main">
                <h3>What We Provide ?</h3>
                    <div>
                        <ul>
                             <li>Investment & Finance Education</li>
                             <li>Hands-On Market Simulation</li>
                             <li>Latest Investment & Financial News</li>
                        </ul>
                    </div>
                
                    <img className = "Register-floatleft" src={registerImage}/>

                </div>
                
            </div>


            <div className = "right-section">
                <h2>Register an Account</h2>
                    <div className  = "box input">
                        <form>
                            <div className = "input">
                                 <label for = "email">Email Address</label>
                                 <br></br>
                                 <input type = "email" id="email"  placeholder="Enter Your Email Address" required></input>
                            </div>

                            <div className = "input">
                                 <label for = "username">Username</label>
                                 <br></br>
                                 <input type = "text" id="username"  placeholder="Enter Your Username" required></input>
                            </div>

                            <div className = "input">
                                 <label for = "password">Password</label>
                                 <br></br>
                                 <input type = "password" id="password"  placeholder="Enter Your Password" required></input>
                            </div>

                            <div className = "input">
                                 <label for = "confirmPassword">Confirm Your Password</label>
                                 <br></br>
                                 <input type = "password" id="confirmPassword"  placeholder="Reenter Your Password" required></input>
                            </div>


                            <label className="terms-checkbox">
                                <input type="checkbox" id="term" name="terms" required />I agree to the <Link to="/terms">Terms & Conditions</Link>
                            </label>
                            

                            <button type="submit" className="registerBtn" onClick={handleRegisterClick}>Register</button>

                        </form>        
                    </div>


                    <div className = "or-container">
                        <div className = "line"></div>
                        <p className="or-text">or</p>
                        <div className="line"></div>
                    </div>
                
                    <Link className="signIn" to='/General/signIn'>Sign In Now</Link>

            </div>

        </div>
               
    )
    
}

