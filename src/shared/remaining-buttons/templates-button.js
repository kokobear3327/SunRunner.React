import './templates-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function TemplatesButton() {

    return (
        <div class="templates-button-parent">
        <Link to="/Template">
        <button className="templates-button">Templates</button>
        </Link>
        </div>
    );
  }