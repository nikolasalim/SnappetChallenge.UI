import React from "react";

function Learning(props) {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="pupils-box">{props.pupils}</div>
      <div className="show-details-btn">Show details</div>
    </div>
  );
}

export default Learning;
