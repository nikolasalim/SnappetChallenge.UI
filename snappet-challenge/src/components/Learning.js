import React from "react";

function Learning(props) {
  let totalPupils = [];

  function countingPupils(present, absent, total) {
    // Painting each pupil and it's status color:

    const presentPupil = (
      <div
        style={{
          height: "10px",
          width: "10px",
          margin: "2px",
          backgroundColor: "blue",
        }}
      ></div>
    );

    const absentPupil = (
      <div
        style={{
          height: "10px",
          width: "10px",
          margin: "2px",
          backgroundColor: "yellow",
        }}
      ></div>
    );

    const defaultPupil = (
      <div
        style={{
          height: "10px",
          width: "10px",
          margin: "2px",
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

  const { present, absent, total } = props.pupilsInfo;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "1500px",
      }}
    >
      <p className="title" style={{ width: "200px" }}>
        {props.title}
      </p>
      <div
        className="pupils-box"
        style={{
          width: "700px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {/* Running the function that counts pupils and then printing them: */}
        {countingPupils(present, absent, total)}
        {totalPupils.map((pupil, i) => {
          return <div key={i}>{pupil}</div>;
        })}
      </div>
      <div className="show-details-btn" style={{ width: "200px" }}>
        Show details
      </div>
    </div>
  );
}

export default Learning;
