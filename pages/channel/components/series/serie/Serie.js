import React from "react";

const Serie = props => {
  return (
    <div className="serie">
      <div className="serieBanner">
        <img src={props.urls.logo_image.original} alt={props.title} />
      </div>
      <div className="serieName">
        <h4>{props.title}</h4>
      </div>

      <style jsx>{`
        div.serie {
          border-radius: 6px;
          background-color: white;
          overflow: hidden;
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
        }

        .serie .serieBanner img {
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
          width: 100%;
        }

        .serie .serieName h4 {
          max-height: 60px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 4px;
        }
      `}</style>
    </div>
  );
};

export default Serie;
