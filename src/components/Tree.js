import React from 'react'
//import './tree-view.css';
import Dock from '../components/Dock';
import Layout from '../components/Layout';

function TreeView() {
    return (
        <Layout>
        <div className="tree-view-parent">
        <div className="tree-view-child">
        <Dock></Dock>
        </div>
        <style jsx>{`

            .tree-view-parent {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom:60px;
            }

        `}
        
        </style>
        </div>
        </Layout>
    );
  }

  
  
  export default TreeView;
