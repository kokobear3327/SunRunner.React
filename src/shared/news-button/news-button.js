import './news-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function NewsButton() {

    return (
        <div class="news-button-parent">
        <Link to="/News">
        <button className="news-button"><p>News</p></button>
        </Link>
        </div>
    );
  }