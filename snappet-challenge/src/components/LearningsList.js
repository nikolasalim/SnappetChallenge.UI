import React from "react";
import Learning from "./Learning";

const subjectsMockUp = [
  {
    title: "Math Grade 5",
    learningObjectives: [
      {
        title: "001. Learning Objective number one",
        pupils: {
          present: 16,
          absent: 0,
          total: 40,
        },
      },
      {
        title: "002. Learning Objective number two",
        pupils: {
          present: 3,
          absent: 3,
          total: 40,
        },
      },
      {
        title: "003. Learning Objective number three",
        pupils: {
          present: 3,
          absent: 3,
          total: 40,
        },
      },
    ],
  },
];

function LearningsList() {
  return (
    <div>
      <Learning />
      <Learning />
      <Learning />
    </div>
  );
}

export default LearningsList;
