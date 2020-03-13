import React from 'react';

import AudioPlayer from '../AudioPlayer';

const AnswerCard = ({ mixinClass, data }) => {
  if (data) {
    const { name, species, description, image, audio } = data;

    return (
      <div className={`answer-card ${mixinClass}`}>
        <img src={image} alt="" className="answer-card__img" />
        <div className="answer-card__main">
          <h3 className="answer-card__name">{name}</h3>
          <h4 className="answer-card__species">{species}</h4>
          <AudioPlayer src={audio} />
        </div>
        <p className="answer-card__description">{description}</p>
      </div>
    );
  }

  return (
    <div className={`answer-card ${mixinClass}`}>
      <p className="answer-card__description">
        Послушайте плеер и выберите птицу из списка.
      </p>
    </div>
  );
};

export default AnswerCard;
