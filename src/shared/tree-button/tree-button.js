import React from 'react'
import Link from 'next/link';


// So you would add an onclick event where the router would take you to the route specified. 

function TreeButton() {
    function handleClick() {
    console.log('handleClick Called');
        // Routing logic to take you to the treeView
    }
    return (
        <div className="tree-button-parent">
        <button onClick={handleClick} className="tree-button">Tree of Knowledge</button>
        </div>
    );
  }
  
  export default TreeButton;