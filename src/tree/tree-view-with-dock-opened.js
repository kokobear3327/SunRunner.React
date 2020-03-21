import React from 'react'
import './tree-view-with-dock-opened.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreeDockOpened from './tree-docks/tree-dock-opened';

export default function TreeViewWithDockOpened() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <div className="tree-dock">
        <TreeDockOpened></TreeDockOpened>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

