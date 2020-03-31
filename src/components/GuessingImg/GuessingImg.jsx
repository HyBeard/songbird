import React from 'react';
import guessingScreensaver from './guessingScreensaver.jpg';

const GuessingImg = ({ rightAnswerWasGiven, src }) => {
  return (
    <img
      className="guessing-img card-img border"
      src={rightAnswerWasGiven ? src : guessingScreensaver}
      alt="guessing bird"
    />
  );
};

export default GuessingImg;
