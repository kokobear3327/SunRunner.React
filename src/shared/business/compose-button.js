import './compose-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ComposeButton() {

    return (
        <div class="business-compose-button-parent">
        <Link to="/BusinessCompose">
        <button className="business-compose-button">Compose</button>
        </Link>
        </div>
    );
  }