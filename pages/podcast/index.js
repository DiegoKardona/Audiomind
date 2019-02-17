import { Component } from "react";

import fetch from "isomorphic-fetch";

import Link from "next/link";

export default class extends Component {
  static async getInitialProps({ query }) {
    const podcastId = query.id;

    const req = await fetch(
      `https://api.audioboom.com/audio_clips/${podcastId}.mp3`
    );
    const clip = (await req.json()).body.audio_clip;
    return { clip };
  }

  render() {
    const { clip } = this.props;

    return (
      <div>
        <div className="modal">
          <div className="clip">
            <nav>
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className="close">&lt; Volver</a>
              </Link>
            </nav>

            <picture>
              <div
                style={{
                  backgroundImage: `url(${clip.urls.image ||
                    clip.channel.urls.logo_image.original})`
                }}
              />
            </picture>

            <div className="player">
              <h3>{clip.title}</h3>
              <h4>{clip.channel.title}</h4>
              <audio controls autoPlay={true}>
                <source src={clip.urls.high_mp3} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>

        <style jsx>{`
          nav {
            background: white;
          }

          nav a {
            display: inline-block;
            padding: 16px;
            color: black;
          }

          .clip {
            display: flex;
            height: 100%;
            flex-direction: column;
            background: black;
            color: black;
          }

          picture {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1 1;
            flex-direction: column;
            width: auto;
            padding: 10%;
          }

          picture div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-size: contain;
            background-repeat: no-repeat;
          }

          .player {
            padding: 30px;
            background: white;
            text-align: center;
          }

          h3 {
            margin: 0;
          }

          h6 {
            margin: 0;
            margin-top: 1em;
          }

          audio {
            margin-top: 2em;
            width: 100%;
          }

          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>

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
