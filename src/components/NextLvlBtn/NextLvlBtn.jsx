import React from 'react';

const NextLvlBtn = ({ mixinClass, rightAnswerWasGiven, onLevelChange }) => {
  return (
    <button
      className={`next-btn ${mixinClass}`}
      disabled={!rightAnswerWasGiven}
      onClick={() => onLevelChange()}
    >
      Next Level
    </button>
  );
};

export default NextLvlBtn;
