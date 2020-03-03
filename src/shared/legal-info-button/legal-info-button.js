import React from 'react'
import { Link } from "react-router-dom";
import './legal-info-button.css';

export default function LegalInfoButton() {

    return (
        <div className="legal-info-container">
        <Link to="/Legal-Info">
        <button className="legal-info">Legal Info</button>
        </Link>
        </div>
    );
  }
  