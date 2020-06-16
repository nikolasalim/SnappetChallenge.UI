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

function LearningsList() {
  return subjectsMockUp.map((subject) => (
    <Learning
      key={subject.id}
      title={subject.title}
      pupilsInfo={subject.pupils}
    />
  ));
}

export default LearningsList;
