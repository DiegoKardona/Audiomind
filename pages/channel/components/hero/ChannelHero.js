import React from "react";

const ChannelHero = props => {
  const { channel } = props;
  return (
    <div
      id="channel-info"
      style={{
        backgroundImage: `url(${channel.urls.banner_image.original})`
      }}
    >
      <div id="gradient-overlay" />

      <div
        id="channel-logo"
        style={{
          backgroundImage: `url(${channel.urls.logo_image.original})`
        }}
      />

      <style jsx>{`
        #channel-info {
          background: #ccc;

          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          grid-template-rows: repeat(2, 1fr);

          height: 340px;
          max-height: 400px;
          background-size: cover;
          background-position: center;
          box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.15);
          background-repeat: no-repeat;

          position: relative;
        }

        #gradient-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 30%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        #channel-logo {
          grid-column: 2 / 3;
          grid-row: 2 / 2;
          background: #ddd;
          width: auto;
          height: auto;
          background-size: cover;
          background-position: center;
          box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          border: 2px solid white;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default ChannelHero;
