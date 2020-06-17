import React from "react";
import "./Learning.scss";

function Learning(props) {
  let totalPupils = [];

  function countingPupils(present, absent, total) {
    // Painting each pupil and it's status color:

    const presentPupil = <div className="present-pupil"></div>;

    const absentPupil = <div className="absent-pupil"></div>;

    const defaultPupil = <div className="default-pupil"></div>;

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
    <div className="learning-body">
      <hr className="divider"></hr>

      <div className="learning-box">
        <p className="title">{props.title}</p>
        <div className="pupils-box">
          {/* Running the function that counts pupils and then printing them: */}
          {countingPupils(present, absent, total)}
          {totalPupils.map((pupil, i) => {
            return <div key={i}>{pupil}</div>;
          })}
        </div>
        <div className="btn-box">
          <div className="show-details-btn">Show details</div>
        </div>
      </div>
    </div>
  );
}

export default Learning;
