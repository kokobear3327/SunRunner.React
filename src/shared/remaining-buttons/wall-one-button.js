import './wall-one-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function WallOneButton() {

    return (
        <div class="wall-one-button-parent">
        <Link to="/WallOne">
        <button className="wall-one-button">Wall 1</button>
        </Link>
        </div>
    );
  }