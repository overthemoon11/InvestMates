import React, { useState } from 'react';
import './Academy.css';
import IntroductionToTheCourse from './contents/IntroductionToTheCourse'
import WhatIsAnInvestment from './contents/WhatIsAnInvestment'


const LeftMenu = ({topics, changeContent}) => {
    const [topic, setTopic] = useState(topics[0]);


    const changeTopic = (topic) => {
        setTopic(topic);
    };


    const matchContent = (topic) => {
        if (topic === "Introduction to the Course") {
            changeContent(<IntroductionToTheCourse />);
        } else if (topic === "What is an Investment") {
            changeContent(<WhatIsAnInvestment />);
        } else {
            changeContent(<h1>{topic}</h1>)
        }
    }


    return (
        <div>
            <h2 style={{color: '#c07287', padding: "2px"}} >Beginner Basics</h2>
            {topics.map((topicName) => (
                <div
                    className="topics"
                    key={topicName}
                    onClick={() => {
                        changeTopic(topicName);
                        matchContent(topicName);
                    }}
                    style={{ fontWeight: topicName === topic ? 'bold' : 'normal' }}
                >
                    {topicName}
                </div>
            ))}
        </div>
    );
};


export default LeftMenu;