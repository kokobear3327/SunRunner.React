import './messaging-buttons.css';
import MailboxButton from './mailbox-button';
import ComposeButton from './compose-button';
import React from 'react';

export default function MessagingButtons() {

    return (
        <div class="messaging-buttons-parent">
            <MailboxButton></MailboxButton>
            <ComposeButton></ComposeButton>
        </div>
    );
  }