import React from 'react'
import './tree-view-with-dock-opened.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreeVid from '../videos/Tree.mp4';
import TreeDockOpened from './tree-docks/tree-dock-opened';

export default function TreeViewWithDockOpened() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
            <source src={TreeVid} 
                type="video/mp4"></source>
        </video>
        <div className="tree-dock">
        <TreeDockOpened></TreeDockOpened>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

