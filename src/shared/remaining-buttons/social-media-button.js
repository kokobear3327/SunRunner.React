import './social-media-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function SocialMediaButton() {

    return (
        <div class="social-media-button-parent">
        <Link to="/social-media">
        <button className="social-media-button">Social Media</button>
        </Link>
        </div>
    );
  }