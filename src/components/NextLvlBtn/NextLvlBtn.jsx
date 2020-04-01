import React from 'react';
import classNames from 'classnames';

const NextLvlBtn = ({ mixinClass, rightAnswerWasGiven, onLevelChange }) => {
  const btnClass = classNames(
    mixinClass,
    'next-btn btn btn-primary btn-lg text-white shadow',
    {
      disabled: !rightAnswerWasGiven,
    },
  );
  return (
    <button
      className={btnClass}
      disabled={!rightAnswerWasGiven}
      onClick={() => onLevelChange()}
    >
      Next Level
    </button>
  );
};

export default NextLvlBtn;
