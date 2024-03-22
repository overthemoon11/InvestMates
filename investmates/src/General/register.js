import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
import logo from '../assets/images/logo_noBackg.png';
import registerImage from '../assets/images/register.png'; 

export const RegistrationPage=()=>{

    useEffect(() => {
        document.title = "InvestMates | Register An Account"; 
               
    }, []);


    return (

        <div className="registrationContainer"> 

            

            <div class="left-section">

            <div className="logoWrapper">
                <div className='logo'>
                    <img src={logo} alt="Website Logo" />
                </div>
            </div>

                <div class = "left-main">
                <h3>What We Provide ?</h3>
                    <div>
                        <ul>
                             <li>Investment & Finance Education</li>
                             <li>Hands-On Market Simulation</li>
                             <li>Latest Investment & Financial News</li>
                        </ul>
                    </div>
                
                    <img class = "Register-floatleft" src={registerImage}/>

                </div>
                
            </div>


            <div class = "right-section">
                <h2>Register an Account</h2>
                    <div class = "box input">
                        <form>
                            <div class = "input">
                                 <label for = "email">Email Address</label>
                                 <br></br>
                                 <input type = "email" id="email"  placeholder="Enter Your Email Address" required></input>
                            </div>

                            <div class = "input">
                                 <label for = "username">Username</label>
                                 <br></br>
                                 <input type = "text" id="username"  placeholder="Enter Your Username" required></input>
                            </div>

                            <div class = "input">
                                 <label for = "password">Password</label>
                                 <br></br>
                                 <input type = "password" id="password"  placeholder="Enter Your Password" required></input>
                            </div>

                            <div class = "input">
                                 <label for = "confirmPassword">Confirm Your Password</label>
                                 <br></br>
                                 <input type = "password" id="confirmPassword"  placeholder="Reenter Your Password" required></input>
                            </div>


                            <label className="terms-checkbox">
                                <input type="checkbox" id="term" name="terms" required />I agree to the <Link to="/terms">Terms & Conditions</Link>
                            </label>

                            <button type="submit" class = "registerBtn">Register</button>
                        </form>        
                    </div>


                    <div class = "or-container">
                        <div class = "line"></div>
                        <p class="or-text">or</p>
                        <div class="line"></div>
                    </div>
                
                    <Link className="signIn" to='/General/signIn'>Sign In Now</Link>

            </div>

        </div>
               
    )
    
}

