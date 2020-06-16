import React from "react";
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

// NavBar component – holds the filters/functionality for the list of Learnings:

function NavBar() {
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
        <DropdownMenu />
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

// DropdownMenu component – responsible for switching between Subjects

function DropdownMenu() {
  return <div>Math Grade 5</div>;
}

// LearningsList component – displays each learning in a list:

function LearningsList() {
  return (
    <div>
      <NavBar />
      {subjectsMockUp.map((subject) => (
        <Learning
          key={subject.id}
          title={subject.title}
          pupilsInfo={subject.pupils}
        />
      ))}
    </div>
  );
}

export default LearningsList;
