import React from 'react';
import classNames from 'classnames';

const AnswersList = ({
  mixinClass,
  chosenBirdId,
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
    <div className={classNames(mixinClass, 'shadow list-group')}>
      {answerChoicesData.map(({ name, id, wasChosenEarly }) => {
        const isRightAnswer = rightAnswerId === id;
        const baseItemClass = classNames(
          'answer list-group-item list-group-item-action d-flex align-items-center ',
          { 'list-group-item-primary': chosenBirdId === id },
        );
        const finalItemClass = wasChosenEarly
          ? classNames(baseItemClass, {
              incorrect: !isRightAnswer,
              correct: isRightAnswer,
            })
          : baseItemClass;

        return (
          <button
            className={finalItemClass}
            key={id}
            onClick={() => flagAndUpdate(id)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default AnswersList;
