import React from 'react';

import birdsData from '../../dataBase/birdsData';

import Header from '../Header';
import CategoryList from '../CategoryList';
import QuestionCard from '../QuestionCard';
import AnswersList from '../AnswersList';
import AnswerCard from '../AnswerCard';
import NextLvlBtn from '../NextLvlBtn';

const App = () => {
  const categories = birdsData.map(({ category }) => category);
  const answerChoices = birdsData[0].categoryData.map((el) => el.name);
  const example = birdsData[0].categoryData[0];

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
