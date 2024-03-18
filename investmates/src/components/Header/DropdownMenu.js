import React, { useState } from 'react';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-content" onMouseEnter={handleToggleDropdown} onMouseLeave={handleToggleDropdown}>
            <a href="#news-financial">Financial</a>
            <a href="#news-companies">Companies</a>
            <a href="#news-crypto">Crypto</a>
            <a href="#news-government">Government</a>
        </div>
    );
}

export default DropdownMenu;
