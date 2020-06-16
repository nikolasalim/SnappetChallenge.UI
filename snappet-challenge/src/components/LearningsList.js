import React, { useState } from "react";
import Learning from "./Learning";

const subjectsMockUp = [
  {
    id: 1,
    title: "001. Learning Objective number one",
    pupils: {
      present: 16,
      absent: 0,
      total: 40,
    },
  },
  {
    id: 2,
    title: "002. Learning Objective number two",
    pupils: {
      present: 3,
      absent: 3,
      total: 40,
    },
  },
  {
    id: 3,
    title: "003. Learning Objective number three",
    pupils: {
      present: 3,
      absent: 3,
      total: 40,
    },
  },
];

const testState = [
  {
    id: 1,
    title: "Math Grade 5",
    learningObjectives: [
      {
        id: 1,
        title: "001. Learning Objective number one",
        pupils: {
          present: 16,
          absent: 0,
          total: 40,
        },
      },
      {
        id: 2,
        title: "002. Learning Objective number two",
        pupils: {
          present: 3,
          absent: 3,
          total: 40,
        },
      },
      {
        id: 3,
        title: "003. Learning Objective number three",
        pupils: {
          present: 3,
          absent: 3,
          total: 40,
        },
      },
    ],
  },

  {
    id: 2,
    title: "Math Grade 4",
    learningObjectives: [
      {
        id: 1,
        title: "004. Learning Objective number four",
        pupils: {
          present: 10,
          absent: 6,
          total: 40,
        },
      },
      {
        id: 2,
        title: "005. Learning Objective number five",
        pupils: {
          present: 5,
          absent: 1,
          total: 40,
        },
      },
      {
        id: 3,
        title: "006. Learning Objective number six",
        pupils: {
          present: 20,
          absent: 4,
          total: 40,
        },
      },
    ],
  },
];

/* 
// DropdownMenu component – responsible for switching between Subjectss

function DropdownMenu(props) {
  return <div>this is the dropdown menu</div>;
} */

// LearningsList component – displays each learning in a list:

function LearningsList() {
  const [subjects, setSubjects] = useState(testState);
  const [currentSubject, setCurrentSubject] = useState(subjects[0].title);

  // NavBar component – holds the filters/functionality for the list of Learnings:

  function NavBar(props) {
    function onChangeHandler(event) {
      setCurrentSubject(event.target.value);
    }

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
            <div className="dropdownMenu"></div>
          </div>

          <select
            className="dropdown-menu"
            name="subjects"
            onChange={onChangeHandler}
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

  return (
    <div>
      <NavBar subjects={subjects}></NavBar>
      {testState.map((subject) => {
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

export default LearningsList;

// const [open, setOpen] = useState(false);

// <a href="#" onClick={() => setOpen(!open)}>
//   Math Grade 5
// </a>;

// {
//   open && props.children;
// }
