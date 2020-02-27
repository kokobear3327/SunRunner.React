// Goal here is just to create the rectangle.
import React from 'react';
import './home.css';
import ConsumerWithDockOpened from '../shared/consumer-dock/consumer-with-dock-opened/consumer-with-dock-opened';

function Home() {
    return (
        <div className="parent-container">
            <div className="child-container">
                <div className="grandchild-container">
            <div className="omnibox-bar-container"></div>   
            <ConsumerWithDockOpened></ConsumerWithDockOpened>       
            </div>
            </div>
        </div>
    );
  }

export default Home;