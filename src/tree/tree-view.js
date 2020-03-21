import React from 'react'
import './tree-view.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreeDock from './tree-docks/tree-dock';

function TreeView() {
    return (
        <div className="tree-view-parent">
        <div className="tree-view-child">
        <div className="tree-dock">
        <TreeDock></TreeDock>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

  
  
  export default TreeView;

