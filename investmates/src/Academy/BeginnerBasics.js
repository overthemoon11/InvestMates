import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightComponent from './RightComponent.js';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import IntroductionToTheCourse from './contents/IntroductionToTheCourse'
import WhatIsAnInvestment from './contents/WhatIsAnInvestment'
import Dummy from './contents/Dummy';

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
    const [topic, setTopic] = useState(topics[0]);
    const [index, setIndex] = useState(0);

    const changeContent = (content) => {
        setContent(content)
    };

    const changeTopic = (topic) => {
        setTopic(topic);
        changeIndex(topics.indexOf(topic));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const changeIndex = (index) => {
        setIndex(index);
    }

    const matchContent = (topic) => {
        if (topic === "Introduction to the Course") {
            changeContent(<IntroductionToTheCourse />);
        } else if (topic === "What is an Investment") {
            changeContent(<WhatIsAnInvestment />);
        } else {
            changeContent(
            <div>
               <h1 className='text title'>{topic}</h1>
               <p className='content text'>This tutorial explains what is {topic}.</p>
               <Dummy />
            </div>
            )
        }
    }

    const handlePreviousTopic = () => {
       if (index > 0) {
            const previousTopic = topics[index - 1];
            setIndex(index - 1);
            setTopic(previousTopic);
            matchContent(previousTopic);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const handleNextTopic = () => {
        if (index < (topics.length-1)) {
            const nextTopic = topics[index + 1];
            setIndex(index + 1);
            setTopic(nextTopic);
            matchContent(nextTopic);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
      <div className="column-container">
          <LeftRightLayout
              leftComponent={<LeftMenu topics={topics} changeContent={changeContent} topic={topic} changeTopic={changeTopic} matchContent={matchContent}/>}
              rightComponent={<RightComponent content={content} onPreviousClick={handlePreviousTopic} onNextClick={handleNextTopic} index={index} topics={topics}/>}
            />
      </div>
    ) 
};