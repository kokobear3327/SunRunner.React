import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>OEA</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <div className="highest-parent">
      {props.children}
    </div>
    <style jsx>{`
        .highest-parent {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 8px blue solid;
        }
    
    `}
    
    
    </style>
  </div>
);

export default Layout;