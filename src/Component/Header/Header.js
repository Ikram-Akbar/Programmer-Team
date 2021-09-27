import React from 'react';
import"./Header.css"

const Header = () => {
    return (
        <div>
            <div className="header-part bg-dark p-3 shadow ">
                <h2>
                Make A Powerful Team for <span className="p-hero">Programming  Hero</span></h2>
                <h4>Your Budget : <span className="p-hero">2 Billion $ USD</span></h4>
            </div>
        </div>
    );
};

export default Header;