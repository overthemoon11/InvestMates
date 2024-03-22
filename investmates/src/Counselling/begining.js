import React, { useEffect } from 'react';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftComponent from './LeftComp.js'; 
import RightComponent from './RightComp.js'; 

export const Begining=()=>{

    useEffect(() => {
        document.title = "InvestMates | Stock Market for Beginners"; 
      }, []);
    
    return (
        <div className="column-container">
            <LeftRightLayout
                leftComponent={<LeftComponent />}
                rightComponent={<RightComponent />}
            />
        </div>
    )
};