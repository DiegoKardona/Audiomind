import React from "react";

import Podcast from "./podcast/Podcast";

import Link from "next/link";

const Podcasts = props => {
  const { podcasts } = props;
  return (
    <div>
      <div id="podcasts-title">
        <h3>Ultimos podcasts.</h3>
      </div>
      <div id="podcasts">
        {podcasts.map(podcast => (
          <Link href={`/podcast?id=${podcast.id}`} prefetch>
            <a>
              <Podcast {...podcast} />
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        #podcasts-title {
          padding: 0 10px;
          width: 180px;
        }

        h3 {
          background: black;
          color: white;
          padding: 2px 4px;
        }

        #podcasts {
          display: grid;
          grid-gap: 16px;
          padding: 16px;
          grid-template-columns: 1fr;
        }
      `}</style>
    </div>
  );
};

export default Podcasts;
