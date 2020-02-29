import './messages-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MessagesButton() {

    return (
        <div class="business-messages-button-parent">
        <Link to="/BusinessMessages">
        <button className="business-messages-button">Messages</button>
        </Link>
        </div>
    );
  }