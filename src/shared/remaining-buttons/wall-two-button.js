import './wall-two-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function WallTwoButton() {

    return (
        <div class="wall-two-button-parent">
        <Link to="/WallTwo">
        <button className="wall-two-button">Wall 2</button>
        </Link>
        </div>
    );
  }