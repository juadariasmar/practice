import React from "react";
import "../stylesheets/Testimony.css";
export function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="img-testimony"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="Profile Emma"
      />
      <div className="container-text-testimony">
        <p className="name-testimony">
          <strong>{props.name}</strong> in {props.country}
        </p>
        <p className="position-testimony">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="text-testimony">"{props.testimony}"</p>
      </div>
    </div>
  );
}
