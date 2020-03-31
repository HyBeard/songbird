import React from 'react';
import classNames from 'classnames';

const NextLvlBtn = ({ mixinClass, rightAnswerWasGiven, onLevelChange }) => {
  const btnClass = classNames(
    mixinClass,
    'text-white shadow btn btn-primary btn-lg next-btn',
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
