import './metadata-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MetadataButton() {

    return (
        <div className="metadata-parent">
        <Link to="/Metadata">
        <button className="metadata-button">Metadata</button>
        </Link>
        </div>
    );
  }