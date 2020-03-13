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
            height: 2800px;
            padding-bottom: 600px;
            background: linear-gradient(70deg, #000000, #010923);
            background-size: 400% 400%;
            animation: AnimationName 10s ease-in-out infinite;
        }


    @keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
}
  }
    `}
    
    </style>
  </div>

    )
  };

export default Layout;