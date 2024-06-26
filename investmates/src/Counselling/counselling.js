import React, { useEffect } from 'react';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftComponent from './LeftComp.js'; 
import RightComponent from './RightComp.js'; 

export const Counselling=()=>{

    useEffect(() => {
        document.title = "InvestMates | Counselling"; 
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