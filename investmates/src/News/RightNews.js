import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserHistory } from "history"
import './RightNews.css';

const RightNews = ({
  title,
  showArticle,
  newsData,
  selectedNews,
  onNewsClick,
  sacascOnClick
}) => {


  return (
    <div className="news-container">

      <div className="right-column">
        {!showArticle ? (
          <ul className='news-title'>
            {newsData.map((news, index) => (
              <li className='news-block' key={index} onClick={() => onNewsClick(news)}>
                <img src={news.urlToImage} alt="News Thumbnail" className="news-image" />
                <div className="news-info">
                  <h4>{news.title}</h4>
                  <p className='publishtime'>{news.publishedAt}</p>
                </div>
              </li>
            ))}
          </ul>
        ) :

          <div className="content-column">
            {selectedNews && (
              <>
                <h2>{selectedNews.title}</h2>
                <p>{selectedNews.publishedAt}</p>
                <img className='content-image' src={selectedNews.urlToImage} alt="News Thumbnail" />
                <p>{selectedNews.content}</p>
              </>
            )}
          </div>}
      </div>
    </div>
  );
};

export default RightNews;
