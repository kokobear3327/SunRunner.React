import React from 'react'
import { Link } from "react-router-dom";
import './lawyers-button.css';

function LawyersButton() {

    return (
        <div class="business-lawyers-button-parent">
        <Link to="/BusinessLawyers">
        <button className="business-lawyers-button">Lawyers</button>
        </Link>
        </div>


    );
  }
  
  export default LawyersButton;