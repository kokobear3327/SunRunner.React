import React from 'react'
import './tree-view-vanilla.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreePic from '../images/Tree.png';
import TreeVanillaDock from './tree-docks/tree-vanilla-dock';

export default function TreeViewVanilla() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <img src={TreePic} alt="-" />
        <div className="tree-dock">
        <TreeVanillaDock></TreeVanillaDock>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

