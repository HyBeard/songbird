import React from 'react';

import AudioPlayer from '../AudioPlayer';

const AnswerCard = ({
  mixinClass,
  data: { name, species, description, image, audio },
}) => {
  return (
    <div className={`answer-card ${mixinClass}`}>
      <img src="" alt="" className="answer-card__img" />
      <div className="answer-card__main">
        <h3 className="answer-card__name">{name}</h3>
        <h4 className="answer-card__species">{species}</h4>
        <AudioPlayer src={audio} />
      </div>
      <p className="answer-card__description">{description}</p>
    </div>
  );
};

export default AnswerCard;
