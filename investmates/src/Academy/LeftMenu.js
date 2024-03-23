import React from 'react';
import './Academy.css';

const LeftMenu = ({topics, changeContent, topic, changeTopic, matchContent}) => {

    return (
        <div className='text'>
            <h2 style={{color: '#c07287', padding: "2px"}} >Beginner Basics</h2>
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