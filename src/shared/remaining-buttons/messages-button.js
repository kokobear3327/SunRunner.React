import './messages-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MessagesButton() {

    return (
        <div class="messages-button-parent">
        <Link to="/Messages">
        <button className="messages-button">Messages</button>
        </Link>
        </div>
    );
  }