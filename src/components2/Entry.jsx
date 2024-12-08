import React from "react";

const Entry = (props) => {
  return (
    <article>
      <div className="pkg">
        <div className="main-image-container">
          <img className="main-image" src={props.img.src} alt={props.img} />
        </div>
        <div className="side2">
          <div className="Entry1">
            <img className="pin" src="/src/assets/marker.png" alt="pin" />
            <span>{props.country}</span>
            <a className="map-link" href={props.googleMapsLink} target="_blank">
              view on Google Maps
            </a>
          </div>

          <div className="Entry2">
            <h2>{props.title}</h2>
          </div>
          <div className="date">
            <p>{props.date}</p>
          </div>
          <div className="details">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Entry;
