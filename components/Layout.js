import Head from 'next/head'

import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
          background: #0a192f;
          color: #cad6f6;
          padding: 30px 90px;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
          letter-spacing: 0.2px;
          box-sizing: border-box;
        }

        @media (max-width: 62.5rem) {
          body {
            padding: 10px;
          }

          html {
            padding: 0;
          }
        }
        p {
          line-height: 1.7;
        }
        
        ul {
          list-style-type: none;
        }
        
        a{
          text-decoration: none;
        }
        
        .wrapper{
          width: 900px;
          max-width: 100%;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }

        a {
          color: #64FFDA;
        }

        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          padding: 0 5px;
          height: 1rem;
        }

        article p,
        article li {
          font-size: 1.5rem;
        }

        article ul {
          list-style-type: initial;
        }
        article li{
          margin-bottom: 20px;
        }

        article h1 {
          font-size: 1.6rem;
        }

        @media (max-width: 62.5rem) {
          article p,
          article li {
            font-size: 1rem;
          }

          article li{
            margin-bottom: 7px;
          }
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
    </>
  )
}
