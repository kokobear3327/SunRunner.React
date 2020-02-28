import React from 'react';
import SearchBar from '../../images/SearchBar.png';
import './omnibox-panel.css';



function OmniboxPanel() {
    return (
        <div className="omnibox-panel">
            <img src={ SearchBar } alt="-" />
            </div>
    );
}

export default OmniboxPanel;