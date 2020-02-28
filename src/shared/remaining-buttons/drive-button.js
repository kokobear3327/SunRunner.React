import './drive-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function DriveButton() {

    return (
        <div class="drive-button-parent">
        <Link to="/Drive">
        <button className="drive-button">Drive</button>
        </Link>
        </div>
    );
  }