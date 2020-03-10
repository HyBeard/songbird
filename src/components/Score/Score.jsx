import React from 'react';

const Score = ({ className, currentScore = 0 }) => {
  return (
    <div className={className}>
      <h5 className="score"> Score: {currentScore}</h5>
    </div>
  );
};

export default Score;
