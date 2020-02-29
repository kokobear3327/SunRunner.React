import './calendars-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function CalendarsButton() {

    return (
        <div class="business-calendars-button-parent">
        <Link to="/Calendars">
        <button className="business-calendars-button">Calendars</button>
        </Link>
        </div>
    );
  }