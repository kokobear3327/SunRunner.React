import './mailbox-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MailboxButton() {

    return (
        <div class="mailbox-button-parent">
        <Link to="/Mailbox">
        <button className="mailbox-button">Mailbox</button>
        </Link>
        </div>
    );
  }