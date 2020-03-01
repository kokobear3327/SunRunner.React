import React from 'react'
import './tree-view-vanilla-opened.css';
import TreeButtons from './tree-buttons/tree-buttons';
import TreePic from '../images/Tree.png';
import TreeVanillaDockOpened from './tree-docks/tree-vanilla-dock-opened';

export default function TreeViewVanillaOpened() {
    return (
        <div className="tree-parent">
        <div className="tree-child">
        <img src={ TreePic } alt="-" />
        <div className="tree-dock">
        <TreeVanillaDockOpened></TreeVanillaDockOpened>
        <TreeButtons></TreeButtons>
        </div>
        </div>
        </div>
    );
  }

  

