import React from 'react';

import GuessingImg from '../GuessingImg';
import AudioPlayer from '../AudioPlayer';

const QuestionCard = ({
  mixinClass,
  rightAnswerWasGiven,
  questionData: { audio, image, name },
}) => {
  return (
    <div className={`question-card ${mixinClass}`}>
      <div className="question-card__img-box">
        <GuessingImg rightAnswerWasGiven={rightAnswerWasGiven} src={image} />
      </div>
      <div className="question-card__info">
        <h3 className="question-card__title">
          {rightAnswerWasGiven ? name : '******'}
        </h3>
        <AudioPlayer src={audio} />
      </div>
    </div>
  );
};

export default QuestionCard;
