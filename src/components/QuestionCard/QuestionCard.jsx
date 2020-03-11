import React from 'react';

import GuessingImg from '../GuessingImg';
import AudioPlayer from '../AudioPlayer';

const QuestionCard = ({ mixinClass }) => {
  return (
    <div className={`question-card ${mixinClass}`}>
      <div className="question-card__img-box">
        <GuessingImg />
      </div>
      <div className="question-card__info">
        <h3 className="question-card__title">*******</h3>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default QuestionCard;
