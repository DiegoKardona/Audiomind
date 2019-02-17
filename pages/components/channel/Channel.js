import React from "react";

//Importing router from nextjs
import Link from "next/link";

const Channel = props => {
  return (
    <Link href={`/channel?id=${ props.id }`} prefetch>
      <a className="channel">
        <div className="channelBanner">
          <img src={props.urls.logo_image.original} alt={props.title} />
        </div>
        <div className="channelName">
          <h4>{props.title}</h4>
        </div>

        <style jsx>{`
          a.channel {
            border-radius: 6px;
            background-color: white;
            overflow: hidden;
            box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
          }

          .channel .channelBanner img {
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
            width: 100%;
          }

          .channel .channelName h4 {
            max-height: 60px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 0 4px;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default Channel;
