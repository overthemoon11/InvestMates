import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightComponent from './RightComponent.js';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import IntroductionToTheCourse from './contents/IntroductionToTheCourse'

export const Beginner=()=>{
    
    const topics = ["Introduction to the Course",
                    "What is an Investment",
                    "Stocks can be good",
                    "Investments",
                    "Stock Exchange",
                    "Index",
                    "Methodologies of Indexes",
                    "Introduction to American Stock",
                    "Indices",
                    "Stock Indexes",
                    "Assets, Liabilities, and Equity"];

    const [content, setContent] = useState(<IntroductionToTheCourse/>);

    const changeContent = (content) => {
        setContent(content)
    };

    return (
      <div className="column-container">
          <LeftRightLayout
              leftComponent={<LeftMenu topics={topics} changeContent={changeContent} />}
              rightComponent={<RightComponent content={content}/>}
              />
      </div>
    ) 
};