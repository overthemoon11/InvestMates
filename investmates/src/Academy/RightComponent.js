import React from 'react';
import './Academy.css';

const RightComponent = ({ content, onPreviousClick, onNextClick, index, topics, onQuizClick }) => {

    const isFirstTopic = index===0;
    const isLastTopic = index===(topics.length-1)

    return (
        <div>
            {content}
            <div>
                <button className='quizButton' onClick={() => onQuizClick(true) }>Test Your Understanding</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {!isFirstTopic && (
                    <button className='preButton' onClick={onPreviousClick}>&lt; Previous</button>
                )}
                {!isLastTopic && (
                    <button className='nextButton' onClick={onNextClick}> Next &gt;</button>
                )}
            </div>
        </div>
    );
};

export default RightComponent;