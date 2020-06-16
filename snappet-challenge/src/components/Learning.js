import React from "react";

function Learning(props) {
  let totalPupils = [];

  function countingPupils(present, absent, total) {
    // Painting each pupil and it's status color:

    const presentPupil = (
      <div
        style={{
          height: "20px",
          width: "20px",
          margin: "5px",
          backgroundColor: "blue",
        }}
      ></div>
    );

    const absentPupil = (
      <div
        style={{
          height: "20px",
          width: "20px",
          margin: "5px",
          backgroundColor: "yellow",
        }}
      ></div>
    );

    const defaultPupil = (
      <div
        style={{
          height: "20px",
          width: "20px",
          margin: "5px",
          backgroundColor: "LightBlue",
        }}
      ></div>
    );

    // Adding present pupils:
    for (let i = 0; i < present; i++) {
      totalPupils.push(presentPupil);
    }

    // Adding "default" pupils:
    const defaultCount = total - (present + absent);

    for (let i = 0; i < defaultCount; i++) {
      totalPupils.push(defaultPupil);
    }

    // Adding absent pupils:
    for (let i = 0; i < absent; i++) {
      totalPupils.push(absentPupil);
    }
  }

  return (
    <div>
      <h1 className="title">{props.title}</h1>
      <div className="pupils-box">
        {countingPupils(props.present, props.absent, props.total)}
        {totalPupils.map((pupil, i) => {
          return <div key={i}> {pupil} </div>;
        })}
      </div>
      <div className="show-details-btn">Show details</div>
    </div>
  );
}

export default Learning;
