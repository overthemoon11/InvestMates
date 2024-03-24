import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserHistory } from "history"
import './RightNews.css';

const RightNews = ({
  title,
  showArticle,
  setShowArticle,
  newsData,
  selectedNews,
  onNewsClick,
  sacascOnClick,
  tempLikes
}) => {

  const handleBackClick = () => {
    setShowArticle(false); // Set showArticle to false when "Back" button is clicked
  };


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
            {selectedNews && typeof selectedNews === 'string' ? (
              <>
                <h2>{JSON.parse(selectedNews).title}</h2>
                <p>{JSON.parse(selectedNews).url}</p>
                <p>{JSON.parse(selectedNews).publishedAt}</p>
                <img className='content-image' src={JSON.parse(selectedNews).urlToImage} alt="News Thumbnail" />
                <p>{JSON.parse(selectedNews).content}</p>
                <button className='backnews' onClick={handleBackClick}>Back</button>
              </>
            ) : (
              <>
                <h2>{selectedNews.title}</h2>
                <p>{selectedNews.url}</p>
                <p>{selectedNews.publishedAt}</p>
                <img className='content-image' src={selectedNews.urlToImage} alt="News Thumbnail" />
                <p>{selectedNews.content}</p>
                <button className='backnews' onClick={handleBackClick}>Back</button>
              </>
            )}
          </div>



        }


      </div>
    </div>
  );
};

export default RightNews;
