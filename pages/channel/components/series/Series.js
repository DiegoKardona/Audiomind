import React from "react";

import Serie from "./serie/Serie";

const Series = props => {
  const { series } = props;
  {
    return Object.keys(series).length === 0 ? (
      <div />
    ) : (
      <div id="xd">
        <div id="series-title">
          <h3>Series.</h3>
        </div>
        <div id="series">
          {series.map(serie => (
            <Serie {...serie} />
          ))}
        </div>
        <style jsx>
          {`
            #series-title {
              padding: 0 10px;
              width: 180px;
            }

            h3 {
              background: black;
              color: white;
              padding: 2px 4px;
            }

            #series {
              display: grid;
              grid-gap: 16px;
              overflow-x: scroll;
              padding: 16px;
              grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
              grid-auto-flow: column;
            }
          `}
        </style>
      </div>
    );
  }
};

export default Series;
