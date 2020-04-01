import React from 'react';
import classNames from 'classnames';

import AudioPlayer from '../AudioPlayer';

const AnswerCard = ({ mixinClass, data }) => {
  const cardClass = classNames(mixinClass, 'shadow answer-card card');

  if (data) {
    const { name, species, description, image, audio } = data;

    return (
      <div className={cardClass}>
        <div className="row row-cols-sm-2 row-cols-1  no-gutters">
          <div className="answer-card__img-box col">
            <img
              src={image}
              alt=""
              className="answer-card__img card-img border"
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title text-secondary">{name}</h5>
              <hr />
              <h6 className="card-subtitle text-muted">{species}</h6>
              <hr />
              <AudioPlayer src={audio} />
            </div>
          </div>
        </div>
        <div className="card-body col">
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cardClass}>
      <div className="card-body">
        <p className="card-text text-secondary">
          Послушайте плеер и выберите птицу из списка.
        </p>
      </div>
    </div>
  );
};

export default AnswerCard;
