import React from 'react'
import { Link } from "react-router-dom";
import './lawyers-button.css';

function LawyersButton() {

    return (
        <Link to="/Lawyers">
        <button className="lawyers-button">Lawyers</button>
        </Link>
    );
  }
  
  export default LawyersButton;