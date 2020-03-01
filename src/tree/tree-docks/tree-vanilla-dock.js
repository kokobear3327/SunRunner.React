import './tree-vanilla-dock.css';
import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../../images/SearchBar.png';

function TreeVanillaDock() {

    return (
        <Link to="/TreeViewVanillaOpened">
        <div class="tree-vanilla-parent">
        <div className="tree-vanilla-panel">
            <div className="search-bar-parent">
            <img className="search-bar-png5" src={SearchBar} alt="-" />
            </div>
            <h4 className="oea-text">Omnibox Extension App</h4>
        </div>
        </div>
        </Link>
    );
  }
  
  export default TreeVanillaDock;