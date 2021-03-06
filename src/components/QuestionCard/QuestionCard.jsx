import React from 'react';
import classNames from 'classnames';

import GuessingImg from '../GuessingImg';
import AudioPlayer from '../AudioPlayer';

const QuestionCard = ({
  mixinClass,
  rightAnswerWasGiven,
  questionData: { audio, image, name },
}) => {
  return (
    <div className={classNames(mixinClass, 'question-card card shadow')}>
      <div className="row no-gutters">
        <div className="question-card__img col-sm col-12">
          <GuessingImg rightAnswerWasGiven={rightAnswerWasGiven} src={image} />
        </div>
        <div className="col-sm col-12">
          <div className="card-body">
            <h5 className="card-title text-secondary">
              {rightAnswerWasGiven ? name : '******'}
            </h5>
            <hr />
            <AudioPlayer src={audio} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
