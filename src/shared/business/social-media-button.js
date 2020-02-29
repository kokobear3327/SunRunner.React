import './social-media-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function SocialMediaButton() {

    return (
        <div class="business-social-media-button-parent">
        <Link to="/BusinessSocialMedia">
        <button className="business-social-media-button">Social Media</button>
        </Link>
        </div>
    );
  }