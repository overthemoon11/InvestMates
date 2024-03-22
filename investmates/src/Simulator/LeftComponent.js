import React from 'react';
import SearchBar from './SearchBar';
import Order from './Orders';
import TotalHolding from './TotalHoldings';

const LeftComponent = () => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <h2 id='pink-big-header'>Simulator</h2>
            <h3 className='purple-small-header'>INVESTMENT TERM?</h3>
            <SearchBar onSearch={handleSearch} />
            <h3 className='purple-small-header'>ORDERS</h3>
            <Order/>
            <h3 className='purple-small-header'>MY TOTAL HOLDINGS</h3>
            <TotalHolding/>
        </div>
    );
};

export default LeftComponent;
