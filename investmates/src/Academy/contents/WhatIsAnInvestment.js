import React from 'react';
import '../Academy.css';


const WhatIsAnInvestment = () => {
    return(
        <div className='text'>
            <h1 className='title'>What is an Investment?</h1>
            <p className='content'>This tutorial explains what is investment, inflation and why investment matters.</p>
            <br/>
            <h3>Investment involves allocating resources with the expectation of generating income or profit in the future.</h3>
            <ul className='content'>
                <li>It's a commitment of capital to an asset or endeavor with the goal of obtaining returns that exceed the initial investment.</li>
                <li>The primary objective of investing is to grow wealth over time through capital appreciation, dividends, or interest payments.</li>
            </ul>
            <br/>
            <h3>Investments can take various forms, including stocks, bonds, real estate, mutual funds, and more.</h3>
            <ul className='content'>
                <li>Investors assume certain risks in pursuit of potential rewards, such as market volatility, inflation, and economic downturns.</li>
                <li>Understanding the principles behind investments is crucial for making informed decisions and maximizing potential returns while managing risks effectively.</li>
            </ul>
            <br/>
        </div>
    );
};


export default WhatIsAnInvestment