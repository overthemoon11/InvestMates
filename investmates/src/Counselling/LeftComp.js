import React, { useState } from 'react';


const LeftComponent = () => {


    return (
        <div>
            <h2>Counselling</h2>
            <nav>
               <h4>TOP PICKS</h4>
                  <ul>
                     <li><a href="#beginners" class="menu-item">Stock Market for Beginners</a></li>
                     <li><a href="#trading" class="menu-item">Simple Trading</a></li>
                  </ul>
               <h4>RECOMMENDATION</h4>
                  <ul>
                     <li><a href="#stocks" class="menu-item">Stocks & Investing</a></li>
                  </ul>
                <h4>OTHERS</h4>
            </nav>
         </div>
    )
    
};

export default LeftComponent;


