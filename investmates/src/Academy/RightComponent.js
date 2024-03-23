import React from 'react';
import './Academy.css';


const RightComponent = ({ content }) => {
    return (
        <div>
            {content}
            <div>
                <button className='quizButton'>Test Your Understanding</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button className='preButton'>&lt; Previous</button>
                <button className='nextButton'> Next &gt;</button>
            </div>
        </div>
    );
};


export default RightComponent;