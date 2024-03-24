import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/SmallLogo.png';
import fb from '../../assets/images/fb2.png';
import twitter from '../../assets/images/twitter2.png';
import ig from '../../assets/images/ig2.png';
import linkedin from '../../assets/images/linkedin2.png';
import './Footer.css';

export const Footer = () => {

    return (
        <footer>
            <div class="footer-content">
                <div class="footer-bottom">
                    <p className='slogan'>Subscribe for Updates and Exclusive Content!</p>
                    <form action="#" method="post" class="subscribe-form">
                        <input className='inputemail' type="email" name="email" placeholder="Enter your email address" required />
                        <button className='submitemail' type="submit">Subscribe</button>
                    </form>
                </div>
                <div class="footer-contact">
                    <p>Website: <a className='web' href="https://github.com/overthemoon11/InvestMates">www.InvestMates.com</a></p>
                    <p>Email: <a className='email' href="mailto:shu.hui051603@gmail.com">shu.hui051603@gmail.com</a></p>
                    <p>Phone: +60 17 840 0523</p>
                    <div class="social-links">
                        <a className='fb' href="https://www.facebook.com/shuhui.tan.3" target="_blank" rel="noopener noreferrer"><img src={fb} /></a>
                        <a className='twitter' href="https://www.twitter.com/yourwebsite" target="_blank" rel="noopener noreferrer"><img src={twitter} /></a>
                        <a className='ig' href="https://www.instagram.com/shuhui_0516?igsh=MTlyNG9uZ2thbzJlcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src={ig} /></a>
                        <a className='linkedin' href="https://www.linkedin.com/in/tan-shu-hui-0a21362a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"><img src={linkedin} /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
};