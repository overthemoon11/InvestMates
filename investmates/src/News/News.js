import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftNews from './LeftNews.js'; // Import your left component
import RightNews from './RightNews.js'; // Import your right component



const News = ({ title, content }) => {
    return (
        <>
            <div>{title} {content.toString()}</div>
            <div className="column-container">
                <LeftRightLayout
                    leftComponent={<LeftNews title={title} />}
                    rightComponent={<RightNews title={title} />}
                />
            </div>
        </>
    );
};

export default News;
