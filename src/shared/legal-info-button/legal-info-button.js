import React from 'react'
import { Link } from "react-router-dom";
import './legal-info-button.css';

export default function LegalInfoButton() {

    return (
        <Link to="/Legal-Info">
        <button className="legal-info-button">Legal Info</button>
        </Link>
    );
  }
  