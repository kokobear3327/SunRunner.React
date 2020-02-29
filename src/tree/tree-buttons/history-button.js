import './history-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function HistoryButton() {

    return (
        <div class="history-parent">
        <Link to="/History">
        <button className="history-button">History</button>
        </Link>
        </div>
    );
  }