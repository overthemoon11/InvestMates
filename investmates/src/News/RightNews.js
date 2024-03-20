import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createBrowserHistory } from "history"

const RightNews = ({ title }) => {
  const [showArticle, setShowArticle] = useState(false);
  const [newsType, setNewsType] = useState(title);
  const [searchText, setSearchText] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [likes, setLikes] = useState([]);
  const [collections, setCollections] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const apiKey = '101e2f362fb74c5e95afe8ee056b18db'; // Replace this with your News API key
  //https://newsapi.org/v2/everything?q=${newsType}&apiKey=8207fa107ccf4949a4ca9e07f5a3a039

  // const history = createBrowserHistory();
  // console.log(history);

  useEffect(() => {
    fetchNews(newsType);
  }, [newsType]);

  useEffect(() => {
    fetchNews(searchText);
  }, [searchText]);

  const fetchNews = async (searchText) => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`);
      setNewsData(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setShowArticle(true);

    // history.push(null, "/abc")
  };

  const handleLike = (news) => {
    setLikes([...likes, news.title]);
  };

  const handleCollect = (news) => {
    setCollections([...collections, news.title]);
  };

  const handleAddNote = () => {
    // Add logic to save note for selected news
    console.log('Note added:', noteInput);
    setNoteInput('');
  };

  const handleCategoryChange = (event) => {
    setNewsType(event.target.value);
  };

  const sacascOnClick = (event) => {
    //...
  };

  return (
    <div className="news-container">
      <select value={newsType} onChange={handleCategoryChange}>
        <option value="financial">Financial</option>
        <option value="company">Company</option>
        <option value="crypto">Crypto</option>
        <option value="government">Government</option>
      </select>

      <div className="right-column">
        {!showArticle ? <ul>
          {newsData.map((news, index) => (
            <li key={index} onClick={() => handleNewsClick(news)}>
              {news.title}
            </li>
          ))}
        </ul> :

          <div className="right-column">
            {selectedNews && (
              <>
                <h2>{selectedNews.title}</h2>
                <p>{selectedNews.publishedAt}</p>
                <img src={selectedNews.urlToImage} alt="News Thumbnail" />
                <p>{selectedNews.content}</p>
                <div className="buttons">
                  <button onClick={() => handleLike(selectedNews)}>Like</button>
                  <button onClick={() => handleCollect(selectedNews)}>Collect</button>
                  <button onClick={() => setNoteInput('')}>Add Note</button>
                </div>
                <textarea value={noteInput} onChange={(e) => setNoteInput(e.target.value)} placeholder="Add your note..." />
                <button onClick={handleAddNote}>Save Note</button>
              </>
            )}
          </div>}
      </div>
    </div>
  );
};

export default RightNews;
