import React from 'react';

import GuessingImg from '../GuessingImg';

const QuestionCard = () => {
  return (
    <div className="question-card">
      <div className="question-card__img-box">
        <GuessingImg />
      </div>
      <div className="question-card__info">
        <h3 className="question-card__title">*******</h3>
      </div>
    </div>
  );
};

export default QuestionCard;
