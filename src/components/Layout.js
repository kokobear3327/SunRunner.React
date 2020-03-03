import Head from 'next/head';

const Layout = (props) => (
  <div>
    <Head>
      <title>OEA</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
    </Head>
    <div className="container23">
      {props.children}
    </div>
    <style jsx>{`
        .container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
    `}
    
    
    </style>
  </div>
);

export default Layout;