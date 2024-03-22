import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import investYourselfLogo from '../assets/images/shortLogo.png';
import backgroundImage from '../assets/images/otherWeb.png';

export const PartnerWebsite = () => {

    const sectionStyle = {
        width: '1520px',
        height: '850px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '1520px 850px',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      };


      useEffect(() => {
        document.title = "INVEST Yourself";     
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
     
        link.href = investYourselfLogo; 
        document.getElementsByTagName('head')[0].appendChild(link);
    }, []);
    




    return (


      <div style={sectionStyle}>
        
      </div>
   
   );
};

export default PartnerWebsite;
