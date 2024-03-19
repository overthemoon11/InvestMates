// NewsCategoryPage.js (for financial news category, similar pages for other categories)
import React from 'react';
import { useParams } from 'react-router-dom';

function NewsCategoryPage() {
    const { category } = useParams();

    return (
        <div className="news-page">
            <div className="left-sidebar">
                <h2>{category} News</h2>
                <input type="text" placeholder="Search news" />
            </div>
            <div className="right-section">
                {/* Display three news items here */}
            </div>
        </div>
    );
}

export default NewsCategoryPage;
