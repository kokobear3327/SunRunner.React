import './metadata-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function MetaButton() {

    return (
        <div class="metadata-parent">
        <Link to="/Metadata">
        <button className="metadata-button">Wall 2</button>
        </Link>
        </div>
    );
  }