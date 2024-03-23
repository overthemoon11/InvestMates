import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeftRightLayout from '../components/LeftRightColumn/LeftRightLayout.js';
import LeftNews from './LeftNews.js';
import RightNews from './RightNews.js';



const News = ({ title, content }) => {
    const [showArticle, setShowArticle] = useState(false);
    const [newsType, setNewsType] = useState(title);
    const [searchText, setSearchText] = useState('');
    const [inputText, setInputText] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [likes, setLikes] = useState([]);
    const [collections, setCollections] = useState([]);
    const [noteInput, setNoteInput] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isCollected, setIsCollected] = useState(false);
    const [showNoteInput, setShowNoteInput] = useState(false);
    const [noteContent, setNoteContent] = useState('');
    const [tempNoteInput, setTempNoteInput] = useState('');
    const [tempLikes, setTempLikes] = useState([]);
    const [tempCollections, setTempCollections] = useState([]);


    const apiKey = '14224112428147fab821eb716dbf3416'; // Replace this with your News API key
    //https://newsapi.org/v2/everything?q=${newsType}&apiKey=8207fa107ccf4949a4ca9e07f5a3a039

    // const history = createBrowserHistory();
    // console.log(history);

    useEffect(() => {
        fetchNews(newsType);
    }, [newsType]);

    useEffect(() => {
        fetchNews(searchText);
    }, [searchText]);

    useEffect(() => {
        const searchButton = document.querySelector('.searchbutton');

        const handleSearch = () => {
            setSearchText(inputText); // Set searchText to inputText when button is clicked
        };

        searchButton.addEventListener('click', handleSearch);

        return () => {
            searchButton.removeEventListener('click', handleSearch);
        };
    }, [inputText]);


    const fetchNews = async (searchText) => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=${apiKey}`);
            setNewsData(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const handleNewsClick = (news) => {
        setSelectedNews(news);
        setShowArticle(true);

        // history.push(null, "/abc")
    };

    const handleInput = (event) => {
        setInputText(event.target.value)
    }

    const handleLike = (news) => {
        if (tempLikes.includes(news.title)) {
            setTempLikes(tempLikes.filter((item) => item !== news.title));
            setIsLiked(false);
        } else {
            setTempLikes([...tempLikes, news.title]);
            setIsLiked(true);
        }
    };


    const handleCollect = (news) => {
        if (tempCollections.includes(news.title)) {
            setTempCollections(tempCollections.filter((item) => item !== news.title));
            setIsCollected(false);
        } else {
            setTempCollections([...tempCollections, news.title]);
            setIsCollected(true);
        }
    };


    const handleAddNote = () => {
        if (showNoteInput && tempNoteInput.trim() !== '') {
            setNoteContent(tempNoteInput);
        }
        setShowNoteInput(!showNoteInput);
    };

    const handleSaveNote = () => {
        // Save note logic
        setNoteInput(tempNoteInput);
        setShowNoteInput(false);
    };

    const handleCategoryChange = (event) => {
        setNewsType(event.target.value);
    };

    const sacascOnClick = (event) => {
        //...
    };


    return (
        <>
            {/* <div>{title} {content.toString()}</div> */}
            <div className="column-container">
                <LeftRightLayout
                    leftComponent={<LeftNews
                        title={title}
                        searchText={searchText}
                        onNewsClick={handleNewsClick}
                        showArticle={showArticle}
                        likes={likes}
                        collections={collections}
                        noteInput={noteInput}
                        onLike={handleLike}
                        onCollect={handleCollect}
                        onAddNote={handleAddNote}
                        selectedNews={selectedNews}
                        isLiked={isLiked}
                        isCollected={isCollected}
                        setNoteInput={setNoteInput}
                        showNoteInput={showNoteInput}
                        handleAddNote={handleAddNote}
                        noteContent={noteContent}
                        tempNoteInput={tempNoteInput}
                        setTempNoteInput={setTempNoteInput}
                        tempLikes={tempLikes}
                        tempCollections={tempCollections}
                        handleInput={handleInput}
                        inputText={inputText}
                    />}
                    rightComponent={<RightNews
                        title={title}
                        showArticle={showArticle}
                        newsData={newsData}
                        selectedNews={selectedNews}
                        onCategoryChange={handleCategoryChange}
                        onNewsClick={handleNewsClick}
                        sacascOnClick={sacascOnClick}
                    />}
                />
            </div>
        </>
    );
};

export default News;
