import React,{useState} from 'react';
    
const RightComponent=()=>{
    const [content, setContent] = useState('Initial Content');

    const handleButtonClick = (companyName) => {
        // Update content based on selected company
        setContent(companyContent[companyName]);
    };

    const companyContent = {
        company1: 'Content for Company 1',
        company2: 'Content for Company 2',
        company3: 'Content for Company 3',
        company4: 'Content for Company 4',
        company5: 'Content for Company 5',
    };
    return(
        <div>
            <div>
                <h2>Your Assets:</h2>
                <h3>*This is not real money</h3>
            </div>
            <div>
                <button onClick={() => handleButtonClick('company1')}>Company A</button>
                <button onClick={() => handleButtonClick('company2')}>Company B</button>
                <button onClick={() => handleButtonClick('company3')}>Company C</button>
                <button onClick={() => handleButtonClick('company4')}>Company D</button>
                <button onClick={() => handleButtonClick('company5')}>Company E</button>
            </div>
            <br></br>
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor:'balck',
                height: '1px',
                }} />
            <p>{content}</p>
            <button>Buy</button>
            <button>Buy</button>
        </div>
    );
};


export default RightComponent;
