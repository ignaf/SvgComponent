import React from "react";

const CardPng = (props) => {
  return (
    <div className="card card--png">
      <div className="card-body" style={{ width: "100%" }}>
        <h5 className="card-title text-center">{props.title}</h5>
        <img src={props.img} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default CardPng;
