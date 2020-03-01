import './social-sciences-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function SocialSciencesButton() {

    return (
        <div class="social-sciences-parent">
        <Link to="/SocialSciences">
        <button className="social-sciences-button">Social Sciences</button>
        </Link>
        </div>
    );
  }