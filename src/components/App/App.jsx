import React, { Component } from 'react';

import birdsData from '../../dataBase/birdsData';

import Header from '../Header';
import CategoryList from '../CategoryList';
import QuestionCard from '../QuestionCard';
import AnswersList from '../AnswersList';
import AnswerCard from '../AnswerCard';
import NextLvlBtn from '../NextLvlBtn';

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      currentStep: 0,
      categories: birdsData.map(({ categoryTitle, categoryId }) => ({
        categoryTitle,
        categoryId,
      })),
      chosenBird: null,
      rightAnswerWasGiven: false,
      theEnd: false,
    };

    const {
      state,
      state: { currentStep },
    } = this;

    state.birdsOfCurrentCategory = birdsData[currentStep].categoryData;
    state.questionBird = App.takeRandomBird(state.birdsOfCurrentCategory);
  }

  static takeRandomBird(birdsArray) {
    return birdsArray[Math.floor(Math.random() * birdsArray.length)];
  }

  handleAnswerChoice = (chosenItemId) => {
    const { birdsOfCurrentCategory } = this.state;
    const answerIdx = birdsOfCurrentCategory.findIndex(
      ({ id }) => id === chosenItemId,
    );
    const birdData = birdsOfCurrentCategory[answerIdx];

    this.setState(({ rightAnswerWasGiven, questionBird }) => {
      if (rightAnswerWasGiven) {
        return { chosenBird: birdData };
      }

      const birdWithChosenFlag = {
        ...birdData,
        wasChosen: true,
      };

      return {
        birdsOfCurrentCategory: [
          ...birdsOfCurrentCategory.slice(0, answerIdx),
          birdWithChosenFlag,
          ...birdsOfCurrentCategory.slice(answerIdx + 1),
        ],
        chosenBird: birdData,
        rightAnswerWasGiven: chosenItemId === questionBird.id,
      };
    });
  };

  goToNextLevel = () => {
    this.setState(({ currentStep, categories }) => {
      if (currentStep === categories.length - 1) {
        return { theEnd: true };
      }

      const nextStep = currentStep + 1;
      const birdsOfCurrentCategory = birdsData[nextStep].categoryData;
      const questionBird = App.takeRandomBird(birdsOfCurrentCategory);

      return {
        currentStep: nextStep,
        birdsOfCurrentCategory,
        questionBird,
        chosenBird: null,
        rightAnswerWasGiven: false,
      };
    });
  };

  render() {
    const {
      score,
      categories,
      currentStep,
      birdsOfCurrentCategory,
      questionBird,
      chosenBird,
      rightAnswerWasGiven,
      theEnd,
    } = this.state;

    return (
      <div className="wrap">
        <Header score={score} />
        <main className="quiz">
          <CategoryList
            mixinClass="quiz__category-list"
            categories={categories}
            currentStep={currentStep}
          />
          <QuestionCard
            mixinClass="quiz__question-card"
            questionData={questionBird}
            rightAnswerWasGiven={rightAnswerWasGiven}
          />
          <AnswersList
            mixinClass="quiz__answers-list"
            answerChoicesData={birdsOfCurrentCategory}
            rightAnswerId={questionBird.id}
            rightAnswerWasGiven={rightAnswerWasGiven}
            onAnswerChoice={this.handleAnswerChoice}
          />
          <AnswerCard mixinClass="quiz__answer-card" data={chosenBird} />
          <NextLvlBtn
            mixinClass="quiz__next-btn"
            rightAnswerWasGiven={rightAnswerWasGiven}
            onLevelChange={this.goToNextLevel}
          />
        </main>
      </div>
    );
  }
}

export default App;
