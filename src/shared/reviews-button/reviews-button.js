import './reviews-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ReviewsButton() {

    return (
        <div class="reviews-button-parent">
        <Link to="/Reviews">
        <button className="reviews-button">Reviews</button>
        </Link>
        </div>
    );
  }