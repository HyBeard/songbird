import React from 'react';

import cn from '../../utils/bemNaming';

const AnswersList = ({
  mixinClass,
  answerChoicesData,
  rightAnswerId,
  rightAnswerWasGiven,
  onAnswerChoice,
}) => {
  const flagAndUpdate = (chosenItemId) => {
    const chosenItemIndex = answerChoicesData.findIndex(
      ({ id }) => id === chosenItemId,
    );
    const chosenBird = answerChoicesData[chosenItemIndex];

    if (rightAnswerWasGiven || chosenBird.wasChosenEarly) {
      onAnswerChoice({ chosenBird });
      return;
    }

    const birdWithChosenFlag = {
      ...chosenBird,
      wasChosenEarly: true,
    };
    const updatedBirdsData = [
      ...answerChoicesData.slice(0, chosenItemIndex),
      birdWithChosenFlag,
      ...answerChoicesData.slice(chosenItemIndex + 1),
    ];

    onAnswerChoice({ chosenBird: birdWithChosenFlag, updatedBirdsData });
  };

  return (
    <ul className={`answers-list ${mixinClass}`}>
      {answerChoicesData.map(({ name, id, wasChosenEarly }) => {
        const isRightAnswer = rightAnswerId === id;
        const baseItemClass = cn('answers-list', 'item');
        const finalItemClass = wasChosenEarly
          ? baseItemClass({ right: isRightAnswer, wrong: !isRightAnswer })
          : baseItemClass();

        return (
          <li
            className={finalItemClass}
            key={id}
            onClick={() => flagAndUpdate(id)}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default AnswersList;
