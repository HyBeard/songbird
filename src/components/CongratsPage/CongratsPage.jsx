import React from 'react';
import certificate from '../../assets/certificate.pdf';

const CongratsPage = ({ score }) => {
  const MAX_SCORE = 30;
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="congrats-page">
      <h2 className="congrats-page__congrats text-uppercase text-center">
        Поздравляем!
      </h2>
      <p className="congrats-page__result text-center">
        Вы прошли викторину и набрали {score} из {MAX_SCORE} возможных баллов
      </p>
      {score === MAX_SCORE && (
        <button className="btn btn-primary d-block mb-2 ml-auto mr-auto shadow text-white">
          <a
            className="text-reset d-block"
            href={certificate}
            download="bird_expert_certificate.pdf"
          >
            Скачать сертификат
          </a>
        </button>
      )}
      <button
        onClick={refreshPage}
        className="btn btn-primary d-block mb-2 ml-auto mr-auto text-white shadow"
      >
        Попробовать еще раз!
      </button>
    </div>
  );
};

export default CongratsPage;
