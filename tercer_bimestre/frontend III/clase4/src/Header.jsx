import React from 'react';
import './headerStyle.css';

const Header = () => {
    return (
      <>
        <header id="header">
            <nav style={{width: "100%"}}>
                <ul id="items">
                    <li className="liPoint">Home</li>
                    <li className="liPoint">About</li>
                    <li className="liPoint">Career</li>
                    <li className="liPoint">Education</li>
                </ul>
            </nav>
        </header>
      </>  
    );
}

export default Header;