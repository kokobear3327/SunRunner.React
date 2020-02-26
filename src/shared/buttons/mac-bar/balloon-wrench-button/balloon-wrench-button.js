import React from 'react';
import './balloon-wrench-button.css';
// import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import BalloonWrenchPic from './balloon-wrench.svg'; 

function BalloonWrenchButton() {
    return (
        <div>
        <Link to="/BalloonWrenchView">
            <div>
        <img className="balloon-wrench" src={ BalloonWrenchPic } alt="hey" />
        </div>
        </Link>
        </div>
    );
  }
  
export default BalloonWrenchButton;

