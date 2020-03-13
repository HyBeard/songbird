import React from 'react';

const CongratsPage = ({ score }) => {
  const MAX_SCORE = 30;
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="congrats-page">
      <p className="congrats-page__congrats">Поздравляем!</p>
      <p className="congrats-page__result">
        Вы прошли викторину и набрали {score} из {MAX_SCORE} возможных баллов
      </p>
      <button
        type="button"
        onClick={refreshPage}
        className="congrats-page__refresh"
      >
        Попробовать еще раз!
      </button>
    </div>
  );
};

export default CongratsPage;
