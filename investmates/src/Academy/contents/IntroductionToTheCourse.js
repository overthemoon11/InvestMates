import React from 'react';
import '../Academy.css';


const IntroductionToTheCourse = () => {
    return (
        <div className='text'>
            <h1 className='title'>Introduction to the Course</h1>
            <p className='content'>Welcome to the Beginner's Guide to Investment! This course is designed to be your comprehensive roadmap into the captivating world of investing. Whether you're a complete novice or someone seeking to reinforce their understanding, this course is tailored to accommodate all levels of experience.</p>
            <br/>
            <h2>Mission</h2>
            <ul className='content'>
                <li>In today's fast-paced world, understanding how to make your money work for you is a necessity.</li>
                <li>The realm of investments can seem daunting, filled with jargon and complexities.</li>
                <li>Our mission is to unravel these mysteries and arm you with the knowledge and confidence needed to embark on your investment journey.</li>
                <li>We'll take a step-by-step approach, starting from the basics and gradually building up to more advanced concepts.</li>
                <li>Clear explanations, practical examples, and actionable insights will be provided.</li>
            </ul>
            <br/>
            <h2>Topics covered include:</h2>
            <ul className='content'>
                <li>Understanding Basic Terminology: Gain fluency in the language of finance.</li>
                <li>Exploring Different Asset Classes: Introduction to equities, fixed-income securities, real estate, and alternative investments.</li>
                <li>Risk Management Strategies: Learn techniques such as asset allocation, hedging, and risk assessment.</li>
                <li>Building Investment Portfolios: Design and maintain a balanced portfolio aligned with your financial goals.</li>
            </ul>
            <br/>
        </div>
    );
};


export default IntroductionToTheCourse