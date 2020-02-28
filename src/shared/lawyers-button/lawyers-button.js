import React from 'react'
import { Link } from "react-router-dom";
import './lawyers-button.css';

function LawyersButton() {

    return (
        <div class="lawyers-button-parent">
        <Link to="/Lawyers">
        <button className="lawyers-button">Lawyers</button>
        </Link>
        </div>


    );
  }
  
  export default LawyersButton;