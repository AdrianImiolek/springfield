import {questionsData}from './questions.data';
import Question from "./Question"
import { useState } from 'react';

export default function Faq({page}) {
  const questions = questionsData.find((q) => q.page === page)

  const [activeIndex, setActiveIndex] = useState(null);
  function handleQuestionClick(id) {
    setActiveIndex((prev) => (prev === id ? null : id));
  } //You can close the question by clicking on it once again



  return (
    <section className="faq wrapper pt-20 pb-20">
      <h2 className="text-h2 m-5 text-center">Najczęściej zadawane <span className="gradient-blue-to-green">pytania</span></h2>
      <div className="faq-container">
        {questions.cards.map((question) => (
          <Question
            key={question.id}
            index={question.id}
            title={question.title}
            description={question.description}
            isActive={activeIndex === question.id}
            openQuestion={() => handleQuestionClick(question.id)}
          />
        ))}
      </div>
    </section>
  );
}
