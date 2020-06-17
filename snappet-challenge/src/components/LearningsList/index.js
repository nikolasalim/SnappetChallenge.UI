import React, { useState, useEffect } from "react";
import Learning from "../Learning";
import subjectsMockUp from "../../assets/subjectsMockUp";

import "./LearningsList.scss";

// LearningsList component – displays each learning in a list:

function LearningsList() {
  const [subjects, setSubjects] = useState(subjectsMockUp);
  const [currentSubject, setCurrentSubject] = useState(subjects[0].title);

  // onChange handler for the Subject selector menu:

  function onChangeHandler(event) {
    setCurrentSubject(event.target.value);
  }

  return (
    <div className="learnings-list-body">
      <NavBar subjects={subjects} onChangeHandler={onChangeHandler}></NavBar>

      <div
        className="table-titles"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          width: "1500px",
        }}
      >
        <p>Learning Objective</p>
        <p>Pupils</p>
      </div>
      {subjectsMockUp.map((subject) => {
        if (subject.title === currentSubject) {
          return subject.learningObjectives.map((learning) => {
            return (
              <Learning
                key={learning.id}
                title={learning.title}
                pupilsInfo={learning.pupils}
              />
            );
          });
        }
      })}
    </div>
  );
}

// NavBar component – holds the filters/functionality for the list of Learnings:

function NavBar(props) {
  // const [currentSubject, setCurrentSubject] = useState(props.subjects[0].title);

  return (
    <div
      className="navbar-box"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        width: "1500px",
      }}
    >
      <div
        className="left-side"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          className="toggle-box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            className="balls-btn"
            style={{ backgroundColor: "grey", width: "50px" }}
          >
            Balls
          </div>
          <div
            className="user-btn"
            style={{ backgroundColor: "lightGrey", width: "50px" }}
          >
            User
          </div>
        </div>

        <select
          className="dropdown-menu"
          name="subjects"
          onChange={props.onChangeHandler}
        >
          {props.subjects.map((subject) => {
            return (
              <option key={subject.id} value={subject.title}>
                {subject.title}
              </option>
            );
          })}
        </select>
      </div>

      <div
        className="right-side"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          className="add-btn"
          style={{ backgroundColor: "lightBlue", width: "150px" }}
        >
          Add learning objective
        </div>
        <div
          className="update-btn"
          style={{ backgroundColor: "red", width: "150px" }}
        >
          Automatic update
        </div>
      </div>
    </div>
  );
}

export default LearningsList;
