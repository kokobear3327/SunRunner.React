import './messaging-buttons.css';
import MailboxButton from './mailbox-button';
import ComposeButton from './compose-button';
import React from 'react';

export default function MessagingButtons() {

    return (
        <div className="messaging-buttons-parent">
        <button className="compose-button">Compose</button>
        </div>
    );
  }