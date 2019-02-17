import { Component } from "react";

import fetch from "isomorphic-fetch";

import Layout from "./containers/layout/Layout";

//Channels container controls every Channel component
import Channels from "./containers/channels/Channels";

export default class extends Component {
  static async getInitialProps() {
    const req = await fetch("https://api.audioboom.com/channels/recommended");
    const { body: channels } = await req.json();
    return { channels };
  }

  render() {
    return (
      <Layout title="Audiomind - Un lugar para escuchar">
        <Channels channels={this.props.channels} />
      </Layout>
    );
  }
}
