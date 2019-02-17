import { Component } from "react";

import Head from "next/head";

//Importing Header from principal page
import Header from "../../components/header/Header";

class Layout extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <Header />

        {children}

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700|Open+Sans:400,700,800");

          body {
            margin: 0;
            font-family: "Inconsolata", monospace;
            background-color: rgb(245, 247, 247);
          }

          * {
            text-decoration: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
