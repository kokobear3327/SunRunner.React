import './tree-button.css';
import React from 'react'
import { Link } from "react-router-dom";


// So you would add an onclick event where the router would take you to the route specified. 

function TreeButton() {
    function handleClick() {
    console.log('handleClick Called');
        // Routing logic to take you to the treeView
    }
    return (
        <div class="tree-button-parent">
        <Link to="/Tree">
        <button onClick={handleClick} className="tree-button">Tree of Knowledge</button>
        </Link>
        </div>
    );
  }
  
  export default TreeButton;