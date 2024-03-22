import React, { useEffect } from 'react';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftComponent from './LeftComp.js'; 
import RightComponent from './RightComp.js'; 
import BeginnerComponent from './beginContent.js'; 

export const Beginning=()=>{

    useEffect(() => {
        document.title = "InvestMates | Stock Market for Beginners"; 
      }, []);
    
    return (
        <div className="column-container">
            <LeftRightLayout
                leftComponent={<LeftComponent />}
                rightComponent={<BeginnerComponent/>}
            />
        </div>
    )
};