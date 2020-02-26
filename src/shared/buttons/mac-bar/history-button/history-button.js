import React from 'react';
import './history-button.css';
import { Link } from "react-router-dom";
import HistoryPic from './history.svg'; 

function HistoryButton() {
    return (
        <div>
        <Link to="/HistoryView">
            <div>
        <img className="history" src={ HistoryPic } alt="hey" />
        </div>
        </Link>
        </div>
    );
  }
  
export default HistoryButton;

