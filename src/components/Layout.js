import Head from 'next/head';
import React, { useRef, useEffect } from 'react';

const Layout = (props) => {
  const instance = useRef(null);

  useEffect(() => {

  })


    return (

  <div>
    <Head>
      <title className="title-parent">Welcome : )</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
      <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
    </Head>
    <div className="highest-parent">
      {props.children}
    </div>
    <div ref={instance}/>
    <style jsx>{`

        .title-parent { 
          display: flex;
          justify-content: center;
          align-items:center;
          position:relative;
          left: 200px;
        }

        .title {
          display: flex;
          justify-content: center;
          position: relative;
          left: 200px;
        }
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