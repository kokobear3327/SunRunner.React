import './tree-dock.css';
import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../images/SearchBar.png';

function TreeDock() {

    return (
        <Link to="/TreeViewWithDockOpened">
        <div class="tree-dock-parent">
        <div className="tree-panel">
            <div className="search-bar-parent">
            <img className="search-bar-png3" src={SearchBar} alt="-" />
            </div>
            <h4 className="oea-text">Omnibox Extension App</h4>
        </div>
        </div>
        </Link>
    );
  }
  
  export default TreeDock;