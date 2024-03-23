import React from 'react';
import './Academy.css';

const LeftMenu = ({topics, changeContent, topic, changeTopic, matchContent}) => {

    return (
        <div>
            <h2 className='categoryHeader' >Beginner Basics</h2>
            {topics.map((topicName) => (
                <div
                    className="topics"
                    key={topicName}
                    onClick={() => {
                        changeTopic(topicName);
                        matchContent(topicName);
                    }}
                    style={{ fontWeight: topicName === topic ? 'bold' : 'normal',
                    color: topicName === topic ? '#6964AF' : 'black' }}
                >
                    {topicName}
                </div>
            ))}
        </div>
    );
};


export default LeftMenu;