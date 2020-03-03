import './flows-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function ComposeButton() {

    return (
        <div className="flows-button-parent">
        <Link to="/Compose">
        <button className="flows-button">Flows</button>
        </Link>
        </div>
    );
  }