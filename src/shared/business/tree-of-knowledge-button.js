import './tree-of-knowledge-button.css';
import React from 'react'
import { Link } from "react-router-dom";

export default function BusinessTreeButton() {

    return (
        <div class="business-tree-button-parent">
        <Link to="/Tree">
        <button className="business-tree-button">Tree of Knowledge</button>
        </Link>
        </div>
    );
  }