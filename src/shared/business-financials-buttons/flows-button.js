import './flows-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function FlowsButton() {

    return (
        <div class="business-flows-button-parent">
        <Link to="/BusinessCompose">
        <button className="business-flows-button">Flows</button>
        </Link>
        </div>
    );
  }