import React from 'react';
import './menu-overflow.css';
// import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import MenuOverflowPic from './illuminati.svg'; 

function MenuOverflowButton() {
    return (
        <div>
        <Link to="/MenuOverflowView">
            <div>
        <img className="menu-overflow" src={ MenuOverflowPic } alt="hey" />
        </div>
        </Link>
        </div>
    );
  }
  
export default MenuOverflowButton;

