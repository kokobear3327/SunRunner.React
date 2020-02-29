import './drive-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function DriveButton() {

    return (
        <div class="business-drive-button-parent">
        <Link to="/BusinessDrive">
        <button className="business-drive-button">Drive</button>
        </Link>
        </div>
    );
  }