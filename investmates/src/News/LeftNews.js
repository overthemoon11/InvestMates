import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeftNews.css';
import likeicon from '../assets/images/likebutton.png';
import likeiconhover from '../assets/images/likebuttonpink.png';
import collecticon from '../assets/images/collectbutton.png';
import collecticonhover from '../assets/images/collectbuttonpink.png';
import addicon from '../assets/images/addbutton.png';
import addiconhover from '../assets/images/addbuttonpink.png';
import searchicon from '../assets/images/searchicon.png';

const LeftNews = ({
  title,
  searchText,
  onSearch,
  onNewsClick,
  showArticle,
  likes,
  isLiked,
  collections,
  isCollected,
  noteInput,
  onLike,
  onCollect,
  onAddNote,
  selectedNews,
  setNoteInput,
  showNoteInput,
  handleAddNote,
  noteContent,
  tempNoteInput,
  setTempNoteInput,
  tempLikes,
  tempCollections,
  handleInput,
  inputText
}) => {

  return (
    <div className="news-container">
      <div className="left-column">
        {!showArticle ? (
          <div>
            <h2 className='news-topic'>{title} News</h2>
            <h3 className='today-date'>- {new Date().toDateString()}</h3>
            <div className='searchbox-container'>
              <input className='searchbox' type="text" placeholder="Search news..." value={inputText} onChange={(e) => handleInput(e)}></input>
              <button className='searchbutton'><img src={searchicon} /></button>
            </div>
            <div className="likecontent-container">
              <h2 className="like-title">LIKES</h2>
              {/* <a className='likelink' href="https://www.bbc.co.uk/sport/football/68594865"><p>Forest docked four points for financial rules breach</p></a> */}
              <ul className='temp-like'>
                {tempLikes.map((news, index) => (
                  <li key={index} onClick={() => onNewsClick(news)}>{JSON.parse(news).title}</li>
                ))}
                {likes.map((news, index) => (
                  <li key={index} >{news.title}</li>
                ))}
              </ul>
            </div>
            <div className="collectcontent-container">
              <h2 className="collect-title">COLLECTS</h2>
              {/* <a className='collectlink' href="https://www.theverge.com/2024/3/12/24098990/radio-public-layoffs-wbur-npr-rooster-teeth-zaslov-warner-brothers"><p>Radio is seeing red</p></a> */}
              <ul className='temp-collect'>
                {tempCollections.map((news, index) => (
                  <li key={index} onClick={() => onNewsClick(news)}>{JSON.parse(news).title}</li>
                ))}
                {collections.map((news, index) => (
                  <li key={index}>{news.title}</li>
                ))}
              </ul>
            </div>

          </div>
        ) : (
          <div>
            {selectedNews && typeof selectedNews === 'string' ? (
              <div>
                <h2 className='news-topic'>{title} News</h2>
                <h3 className='content-title'>{JSON.parse(selectedNews).title}</h3>
                <p className='published-time'>published at: {JSON.parse(selectedNews).publishedAt}</p>
                <div className="buttons">
                  <button className='add-button' onClick={() => onAddNote('')}><img src={showNoteInput ? addiconhover : addicon} alt="Add" /></button>
                  <button className='like-button' onClick={() => onLike(selectedNews)}><img src={isLiked ? likeiconhover : likeicon} alt="Like" /></button>
                  <button className='collect-button' onClick={() => onCollect(selectedNews)}><img src={isCollected ? collecticonhover : collecticon} alt="Collect" /></button>
                </div>
                {showNoteInput && (
                  <>
                    <textarea className='text-area' value={tempNoteInput} onChange={(e) => setTempNoteInput(e.target.value)} placeholder="Write your note here" />
                    <div className='savenote-container'>
                      <button className='savenote-button' onClick={handleAddNote}>Save</button>
                    </div>
                  </>
                )}
                {noteContent && <p className='savednote-content'>Saved Note: {noteContent}</p>}
              </div>
            ) : (
              <div>
                <h2 className='news-topic'>{title} News</h2>
                <h3 className='content-title'>{selectedNews.title}</h3>
                <p className='published-time'>published at: {selectedNews.publishedAt}</p>
                <div className="buttons">
                  <button className='add-button' onClick={() => onAddNote('')}><img src={showNoteInput ? addiconhover : addicon} alt="Add" /></button>
                  <button className='like-button' onClick={() => onLike(selectedNews)}><img src={isLiked ? likeiconhover : likeicon} alt="Like" /></button>
                  <button className='collect-button' onClick={() => onCollect(selectedNews)}><img src={isCollected ? collecticonhover : collecticon} alt="Collect" /></button>
                </div>
                {showNoteInput && (
                  <>
                    <textarea className='text-area' value={tempNoteInput} onChange={(e) => setTempNoteInput(e.target.value)} placeholder="Write your note here" />
                    <div className='savenote-container'>
                      <button className='savenote-button' onClick={handleAddNote}>Save</button>
                    </div>
                  </>
                )}
                {noteContent && <p className='savednote-content'>Saved Note: {noteContent}</p>}
              </div>
            )}
          </div>

        )}
      </div>
    </div>
  );
};

export default LeftNews;
