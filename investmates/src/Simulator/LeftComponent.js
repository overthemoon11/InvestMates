import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Orders from './Orders';

const LeftComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
        alert("this mean blablabla");
    };

    return (
        <div>
            <h2>Simulator</h2>
            <h3>INVESTMENT TERM?</h3>
            <SearchBar onSearch={handleSearch} />
            <h3>ORDERS</h3>
            <Orders/>

        </div>
    );
};

export default LeftComponent;
