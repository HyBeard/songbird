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


  return (
    <div className="wrap">
      <Header />
      <main className="quiz">
        <CategoryList
          mixinClass="quiz__category-list"
          categories={categories}
          currentCategory="Воробьиные"
        />
        <QuestionCard mixinClass="quiz__question-card" />
        <AnswersList
          mixinClass="quiz__answers-list"
          answerChoices={answerChoices}
        />
        <AnswerCard mixinClass="quiz__answer-card" data={example} />
        <NextLvlBtn mixinClass="quiz__next-btn" />
      </main>
    </div>
  );
};

export default App;
