import React, { Component } from 'react';

import birdsData from '../../dataBase/birdsData';
import soundEffects from '../../utils/soundEffects';

import Header from '../Header';
import CategoryList from '../CategoryList';
import QuestionCard from '../QuestionCard';
import AnswersList from '../AnswersList';
import AnswerCard from '../AnswerCard';
import NextLvlBtn from '../NextLvlBtn';
import CongratsPage from '../CongratsPage';

const { correctAnswerSound, wrongAnswerSound } = soundEffects;

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      pointsToGain: 5,
      currentStep: 0,
      categories: birdsData.map(({ categoryTitle, categoryId }) => ({
        categoryTitle,
        categoryId,
      })),
      chosenBird: null,
      currentAnswerIsRight: null,
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

  handleAnswerChoice = ({ chosenBird, updatedBirdsData }) => {
    const { questionBird } = this.state;
    const isRightAnswer = chosenBird.id === questionBird.id;

    if (!updatedBirdsData) {
      this.setState({ chosenBird });
      return;
    }

    if (isRightAnswer) {
      correctAnswerSound.forcePlay();
    } else {
      wrongAnswerSound.forcePlay();
    }

    this.setState(({ score, pointsToGain }) => {
      return {
        chosenBird,
        birdsOfCurrentCategory: updatedBirdsData,
        rightAnswerWasGiven: isRightAnswer,
        score: isRightAnswer ? score + pointsToGain : score,
        pointsToGain: pointsToGain - 1,
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
        pointsToGain: 5,
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
      <div className="container-xl mt-2 mb-2">
        <Header score={score} />
        {theEnd ? (
          <CongratsPage score={score} />
        ) : (
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
            <div>
              <AnswersList
                mixinClass="quiz__answers-list"
                chosenBirdId={chosenBird ? chosenBird.id : null}
                answerChoicesData={birdsOfCurrentCategory}
                rightAnswerId={questionBird.id}
                rightAnswerWasGiven={rightAnswerWasGiven}
                onAnswerChoice={this.handleAnswerChoice}
              />
            </div>
            <AnswerCard mixinClass="quiz__answer-card" data={chosenBird} />
            <NextLvlBtn
              mixinClass="quiz__next-btn"
              rightAnswerWasGiven={rightAnswerWasGiven}
              onLevelChange={this.goToNextLevel}
            />
          </main>
        )}
      </div>
    );
  }
}

export default App;
