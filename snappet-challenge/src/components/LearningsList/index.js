import React, { useState, useEffect } from "react";
import Learning from "../Learning";
import subjectsMockUp from "../../assets/subjectsMockUp";

import "./LearningsList.scss";
import { ReactComponent as DownIcon } from "../../assets/icons/down.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh.svg";
import { ReactComponent as BallsIcon } from "../../assets/icons/balls.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/person.svg";

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

      <div className="table-titles">
        <div className="learning-title">
          <p>Learning Objective</p>
          <a href="#">
            <DownIcon className="down-icon" />
          </a>
        </div>
        <p className="pupils-title">Pupils</p>
        <span className="whitespace-title"></span>
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
    <div className="navbar-box">
      <div className="left-box">
        <div className="toggle-box">
          <div className="balls-btn">
            <BallsIcon className="balls-icon" />
          </div>
          <div className="user-btn">
            <UserIcon className="user-icon" />
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

      <div className="right-box">
        <div className="add-btn">
          <p>Add learning objective</p>
          <PlusIcon className="plus-icon" />
        </div>
        <div className="update-btn">
          <p>Automatic update</p>
          <RefreshIcon className="refresh-icon" />
        </div>
      </div>
    </div>
  );
}

export default LearningsList;
