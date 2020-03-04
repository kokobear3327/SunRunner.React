import './news-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function NewsButton() {

    return (
        <div class="news-button-parent">
        <button className="news-button"><p>News</p></button>
        </div>
    );
  }