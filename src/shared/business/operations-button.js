import './operations-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function OperationsButton() {

    return (
        <div class="operations-button-parent">
        <Link to="/Operations">
        <button className="operations-button">Operations</button>
        </Link>
        </div>
    );
  }