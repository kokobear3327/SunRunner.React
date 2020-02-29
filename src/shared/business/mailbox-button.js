import './mailbox-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MailboxButton() {

    return (
        <div class="business-mailbox-button-parent">
        <Link to="/BusinessMailbox">
        <button className="business-mailbox-button">Mailbox</button>
        </Link>
        </div>
    );
  }