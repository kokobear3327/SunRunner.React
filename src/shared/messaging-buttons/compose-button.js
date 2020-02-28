import './compose-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ComposeButton() {

    return (
        <div class="compose-button-parent">
        <Link to="/Compose">
        <button className="compose-button">Compose</button>
        </Link>
        </div>
    );
  }