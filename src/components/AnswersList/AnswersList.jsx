import React from 'react';

import cn from '../../utils/bemNaming';

const AnswersList = ({
  mixinClass,
  answerChoicesData,
  rightAnswerId,
  onAnswerChoice,
}) => {
  return (
    <ul className={`answers-list ${mixinClass}`}>
      {answerChoicesData.map(({ name, id, wasChosen }) => {
        const isRightAnswer = rightAnswerId === id;
        const baseItemClass = cn('answers-list', 'item');
        const finalItemClass = wasChosen
          ? baseItemClass({ right: isRightAnswer, wrong: !isRightAnswer })
          : baseItemClass();

        return (
          <li
            className={finalItemClass}
            key={id}
            onClick={() => onAnswerChoice(id)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default AnswersList;
