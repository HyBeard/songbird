import React from 'react';
import guessingScreensaver from './guessingScreensaver.jpg';

const GuessingImg = ({ rightAnswerWasGiven, src }) => {
  return (
    <img
      src={rightAnswerWasGiven ? src : guessingScreensaver}
      alt="guessing bird"
    />
  );
};

export default GuessingImg;
