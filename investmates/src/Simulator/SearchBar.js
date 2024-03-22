import React, { useState } from 'react';
import Swal from 'sweetalert2'

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleConfirmClick=(searchTerm)=>{
        if(searchTerm===""){
            Swal.fire({
                text:'You entered nothing!',
                icon:'warning',
                confirmButtonText: 'OK'
            });
        }else{
            Swal.fire({
                title: searchTerm+' means',
                text:'blablabla',
                icon:'info',
                confirmButtonText: 'UNDERSTOOD'
            });
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
        handleConfirmClick(searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="investment-search-bar"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button id="investment-search-bar-button" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
