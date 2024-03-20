import React from 'react';
<<<<<<< Updated upstream
import './News.css';

export const Crypto=()=>{
    return (<aside id="left-section" className='left'>

    <h1 className='pagetitle'>Crypto News</h1>
    <h4 className='date'>- 10 March</h4>
    Search NavBar
    <nav>
        <h4>LIKES</h4>
        <ul>
            <li><a href="#beginners" class="menu-item">Stock Market for Beginners</a></li>
            <li><a href="#trading" class="menu-item">Simple Trading</a></li>
        </ul>
        <h4>COLLECTS</h4>
        <ul>
            <li><a href="#stocks" class="menu-item">Stocks & Investing</a></li>
        </ul>
    </nav>
</aside>)
=======
import News from './News';

const title = "Crypto"
const content = ["1223", "abc"]
export const Crypto = () => {

    return <News
        title={title}
        content={content}
    />
>>>>>>> Stashed changes
};