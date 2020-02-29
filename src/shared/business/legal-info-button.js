import React from 'react'
import { Link } from "react-router-dom";
import './legal-info-button.css';

export default function LegalInfoButton() {

    return (
        <div class="business-legal-info-container">
        <Link to="/Business-Legal-Info">
        <button className="business-legal-info">Legal Info</button>
        </Link>
        </div>
    );
  }
  