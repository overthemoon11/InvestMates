import React,{ useState} from 'react';
import {} from './Simulator-stylesheet.css';
import CompanyComponent from './CompanyComponent';
import StockChartComponent from './Chart';
import HandleBuyClick from './BuyClick';
import HandleSellClick from './SellClick';
    
const RightComponent=()=>{
    const [activeButton, setActiveButton] = useState("company1");
    const [timeInterval, setTimeInterval] = useState('1D'); // Default time interval is set to 1D

    const handleTimeIntervalChange = (interval) => {
        setTimeInterval(interval);
    };
    const handleButtonClick = (companyName) => {
        setActiveButton(companyName);
    };

    return(
        <div>
            <div className="asset-container">
                <h2 id='purple-big-header'>MY ASSETS: RM 100000 <span id='span'>*This is not real money</span></h2>
            </div>
            <div className="company-container">
                <div className={activeButton === 'company1' ? 'company-item active-company-item' : 'company-item inactive-company-item'}>
                    <button 
                        id="Company1" 
                        className={activeButton === 'company1' ? 'active-button' : 'inactive-button'} 
                        onClick={() => handleButtonClick('company1')}>Company A
                    </button>
                    <h4>TREE</h4>
                </div>
                <div className={activeButton === 'company2' ? 'company-item active-company-item' : 'company-item inactive-company-item'}>
                    <button 
                        id="Company2" 
                        className={activeButton === 'company2' ? 'active-button' : 'inactive-button'} 
                        onClick={() => handleButtonClick('company2')}>Company B
                    </button>
                    <h4>RHD</h4>
                </div>
                <div className={activeButton === 'company3' ? 'company-item active-company-item' : 'company-item inactive-company-item'}>
                    <button 
                        id="Company3" 
                        className={activeButton === 'company3' ? 'active-button' : 'inactive-button'} 
                        onClick={() => handleButtonClick('company3')}>Company C
                    </button>
                    <h4>LLaa</h4>
                </div>
                <div className={activeButton === 'company4' ? 'company-item active-company-item' : 'company-item inactive-company-item'}>
                    <button 
                        id="Company4" 
                        className={activeButton === 'company4' ? 'active-button' : 'inactive-button'} 
                        onClick={() => handleButtonClick('company4')}>Company D
                    </button>
                    <h4>Harimau</h4>
                </div>
                <div className={activeButton === 'company5' ? 'company-item active-company-item' : 'company-item inactive-company-item'}>
                    <button 
                        id="Company5" 
                        className={activeButton === 'company5' ? 'active-button' : 'inactive-button'} 
                        onClick={() => handleButtonClick('company5')}>Company E
                    </button>
                    <h4>LAOYING</h4>
                </div>
            </div>
            <br></br>
            <hr style={{
                background: 'black',
                color: 'black',
                borderColor:'balck',
                height: '1px',
                }} />
            <div className='stock-container'>
                <div id='stock-company-data'>
                    {activeButton &&<CompanyComponent company={activeButton}/> }
                </div>
                <div id='stock-graph'>
                    <StockChartComponent timeInterval={timeInterval} />
                    <div id='stock-graph-button-grp'>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("1MIN")}>1MIN</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("5MIN")}>5MIN</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("10MIN")}>10MIN</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("30MIN")}>30MIN</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("1H")}>1H</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("1D")}>1D</button>
                        <button className="stock-graph-button" onClick={()=>setTimeInterval("1M")}>1M</button>
                    </div>
                </div>
            </div>
            <div className="BuyAndSellContainer">
                <button onClick={()=>HandleBuyClick(activeButton)} className='BuyAndSell'>Buy</button>
                <button onClick={()=>HandleSellClick(activeButton)} className='BuyAndSell'>Sell</button>
            </div>
    </div>
    );
};


export default RightComponent;
