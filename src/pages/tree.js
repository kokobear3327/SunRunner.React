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
        <video preload="auto" autoPlay loop className="fullscreen-video" width="1536" height="2048">
        <source src="/Tree.mp4" type="video/mp4"></source>
        </video>
        </div>
        <style jsx>{`

            .tree-view-parent {
                align-items: center;
                justify-content: center;
                width: 1623px;
                height: 2149px;
                background-image: url('./iPadRim.png');
                margin-top: 30px;
                display: flex;
              }

            .tree-view-child {

                border: 9px green solid;
                position: relative;
            }

            .fullscreen-video {
                
            }



        `}
        
        </style>
        </div>
        </Layout>
    );
  }

  
  
  export default TreeView;
