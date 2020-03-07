import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import AppJS from './js/App';

const Layout = (props) => {
  const instance = useRef(null);

  useEffect(() => {

  })


    return (

  <div>
    <Head>
      <title>OEA</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <div className="highest-parent">
      {props.children}
    </div>
    <div ref={instance}/>
    <style jsx>{`
        .highest-parent {
            display: flex;
            align-items: center;
            justify-content: center;
            overflow-y:hidden;
            overflow-x:hidden;
        }
    `}
    
    </style>
  </div>

    )
  };

export default Layout;