import React from "react";

import { IconContext } from "react-icons";
import { MdPlayCircleOutline } from "react-icons/md";

const Podcast = props => {
  return (
    <div className="podcast">
      <div className="podcastContent">
        <div className="podcastName">
          <h4>{props.title}</h4>
        </div>
        <div className="podcastPlayButton">
          <IconContext.Provider value={{ color: "black", size: "1.6rem" }}>
            <MdPlayCircleOutline />
          </IconContext.Provider>
        </div>
      </div>

      <style jsx>{`
        div.podcast {
          border-radius: 6px;
          background-color: white;
          overflow: hidden;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
          padding: 0 6px;
        }

        .podcast .podcastContent {
          display: flex;
          align-items: center;
        }

        .podcast .podcastName h4 {
          max-height: 60px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 4px;
          color: black;
        }

        .podcast .podcastPlayButton {
          padding: 4px;
        }
      `}</style>
    </div>
  );
};

export default Podcast;
