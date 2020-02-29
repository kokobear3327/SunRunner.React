import './applications-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ApplicationsButton() {

    return (
        <div class="business-applications-button-parent">
        <Link to="/BusinessApplications">
        <button className="business-applications-button">Applications</button>
        </Link>
        </div>
    );
  }