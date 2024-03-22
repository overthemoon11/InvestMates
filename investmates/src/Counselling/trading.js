import React, { useEffect } from 'react';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftComponent from './LeftComp.js'; 
import RightComponent from './RightComp.js'; 
import TradingComponent from './tradingContent.js'; 


export const Trading=()=>{

    useEffect(() => {
        document.title = "InvestMates | Simple Trading"; 
      }, []);
    
    return (
        <div className="column-container">
            <LeftRightLayout
                leftComponent={<LeftComponent />}
                rightComponent={<TradingComponent/>}
            />
        </div>
    )
};