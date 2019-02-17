import { Component } from "react";

import fetch from "isomorphic-fetch";

import Layout from "../containers/layout/Layout";

//Importing components
import ChannelHero from "./components/hero/ChannelHero";
import Series from "./components/series/Series";
import Podcasts from "./components/podcasts/Podcasts";

export default class extends Component {
  static async getInitialProps({ query }) {
    const channelId = query.id;

    const [channelReq, seriesReq, audiosReq] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${channelId}`),
      fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`)
    ]);

    //Getting the info of the channel
    /*const channelReq = await fetch(
      `https://api.audioboom.com/channels/${channelId}`
    );*/
    const channelData = await channelReq.json();
    const channel = channelData.body.channel;

    //Getting the series of the channel
    /*const seriesReq = await fetch(
      `https://api.audioboom.com/channels/${channelId}/child_channels`
    );*/
    const seriesData = await seriesReq.json();
    const series = seriesData.body.channels;

    //Getting the audios of the channel
    /*const audiosReq = await fetch(
      `https://api.audioboom.com/channels/${channelId}/audio_clips`
    );*/
    const audiosData = await audiosReq.json();
    const audioClips = audiosData.body.audio_clips;

    return { channel, series, audioClips };
  }

  render() {
    const { channel, series, audioClips } = this.props;

    return (
      <Layout title={`Audiomind - ${channel.title} channel`}>
        <ChannelHero channel={channel} />

        <Series series={series} />

        <Podcasts podcasts={audioClips} />
      </Layout>
    );
  }
}
