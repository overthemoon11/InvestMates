import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import investYourselfLogo from '../assets/images/investYourself.png';
    
const RightComponent=()=>{
    const [activeSection, setActiveSection] = useState('beginning');

    useEffect(() => {
        const handleScroll = () => {
          const beginningOffset = document.getElementById('beginning').offsetTop;
          const tradingOffset = document.getElementById('trading').offsetTop;
          const scrollPosition = window.scrollY + window.innerHeight/2;
    
          if (tradingOffset && scrollPosition >= tradingOffset) {
            setActiveSection('trading');
          } else if (beginnersOffset && scrollPosition >= beginnersOffset) {
            setActiveSection('beginning');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


      return (
        <div className="counsellingPageContainer">
            <div className="link">
                <h4>TOP PICKS</h4>
                <Link to="/beginning" className={activeSection === 'beginners-content' ? 'activeLink' : ''}>
                Stock Market for Beginners
                </Link>
                <Link to="/trading" className={activeSection === 'trading-content' ? 'activeLink' : ''}>
                Simple Trading
                </Link>
             </div>

            <div className="rightContent">
                <article id="beginners-content" className="content-article">
                    <div class="course-details">
                        <div class="course-image">

                        </div>

                    </div>
          











          <button onClick={() => registerNow('beginners-course')}>REGISTER NOW</button>
          {/* ... */}
        </article>
        <article id="trading-content" className="content-article">
          {/* ... */}










         
          {/* ... */}
        </article>
        {/* More content sections as needed */}
      </div>
    </div>
  );
};
export default RightComponent;
