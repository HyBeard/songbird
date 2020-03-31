import React from 'react';

const Score = ({ mixinClass, score }) => {
  return (
    <div className={mixinClass}>
      <span className="text-secondary font-italic score font-weight-bolder">
        Score: {score}
      </span>
    </div>
  );
};

export default Score;
