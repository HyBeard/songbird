import React from 'react';

const AnswersList = ({ mixinClass, answerChoices }) => {
  return (
    <ul className={`answers-list ${mixinClass}`}>
      {answerChoices.map((answer) => {
        return <li className="answers-list__item">{answer}</li>;
      })}
    </ul>
  );
};

export default AnswersList;
