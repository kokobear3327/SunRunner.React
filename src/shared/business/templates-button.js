import './templates-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function TemplatesButton() {

    return (
        <div class="business-templates-button-parent">
        <Link to="/BusinessTemplates">
        <button className="business-templates-button">Templates</button>
        </Link>
        </div>
    );
  }