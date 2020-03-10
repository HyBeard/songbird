import React from 'react';

const AnswersList = ({ answerChoices }) => {
  return (
    <ul className="answers-list">
      {answerChoices.map((answer) => {
        return <li className="answers-list__item">{answer}</li>;
      })}
    </ul>
  );
};

export default AnswersList;
