import React from 'react';

const Score = ({ mixinClass, score }) => {
  return (
    <div className={mixinClass}>
      <h5 className="score"> Score: {score}</h5>
    </div>
  );
};

export default Score;
