import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LeftNews = ({ title }) => {
  const [newsType, setNewsType] = useState(title);
  const [searchText, setSearchText] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [likes, setLikes] = useState([]);
  const [collections, setCollections] = useState([]);
  const [noteInput, setNoteInput] = useState('');
  const apiKey = '101e2f362fb74c5e95afe8ee056b18db'; // Replace this with your News API key

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

  return (
    <div className="news-container">
      <select value={newsType} onChange={handleCategoryChange}>
        <option value="financial">Financial</option>
        <option value="company">Company</option>
        <option value="crypto">Crypto</option>
        <option value="government">Government</option>
      </select>
      <div className="left-column">
        <h2>{newsType.toUpperCase()} News</h2>
        <p>{new Date().toLocaleDateString()}</p>
        <input type="text" placeholder="Search news..." value={searchText} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default LeftNews;
