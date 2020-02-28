import './applications-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ApplicationsButton() {

    return (
        <div class="applications-button-parent">
        <Link to="/Applications">
        <button className="applications-button">Applications</button>
        </Link>
        </div>
    );
  }