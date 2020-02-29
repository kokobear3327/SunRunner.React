import './calendars-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function CalendarsButton() {

    return (
        <div class="calendars-button-parent">
        <Link to="/Calendars">
        <button className="calendars-button">Calendars</button>
        </Link>
        </div>
    );
  }