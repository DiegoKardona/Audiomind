import { Component } from "react";

import fetch from "isomorphic-fetch";

//Importing Channel component to handle it
import Channel from "../../components/channel/Channel";

export default class Channels extends Component {
  render() {
    const { channels } = this.props;

    return (
      <div id="channels">
        {channels.map(channel => (
          <Channel {...channel} />
        ))}

        <style jsx>{`
          #channels {
            display: grid;
            grid-gap: 16px;
            padding: 16px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
        `}</style>
      </div>
    );
  }
}
