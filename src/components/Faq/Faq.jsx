import Question from './Question';
import { useState } from 'react';

export default function Faq() {
  const questions = [
    {
      id: 1,
      title: 'Czym jest Springfield?',
      description: 'Springfield to inteligentne narzędzie do zarządzania zadaniami, projektami i relacjami z klientami. Pomaga zespołom pracować efektywniej, podejmować decyzje w oparciu o dane i eliminować chaos w codziennej pracy.',
    },
    {
      id: 2,
      title: 'Jak Springfield ułatwia zarządzanie zespołem?',
      description: 'Pozwala planować projekty, śledzić postępy, priorytetyzować zadania i współpracować w jednym miejscu – wszystkie informacje są zawsze pod ręką.',
    },
    {
      id: 3,
      title: 'Czy Springfield posiada moduł CRM?',
      description: 'Tak! Springfield umożliwia zarządzanie klientami, monitorowanie leadów i budowanie długotrwałych relacji biznesowych bez potrzeby korzystania z dodatkowych narzędzi.',
    },
     {
      id: 4,
      title: 'Jakie korzyści daje analiza danych w Springfield?',
      description: 'Dzięki zaawansowanej analityce łatwo śledzisz kluczowe wskaźniki (KPI), analizujesz wyniki sprzedaży i podejmujesz decyzje w oparciu o realne dane..',
    },
    {
      id: 5,
      title: 'Czy Springfield pomaga oszczędzać czas?',
      description: 'Zdecydowanie! Moduł śledzenia czasu i automatyzacja workflow redukują ręczne zadania, przyspieszają realizację projektów i pozwalają skupić się na tym, co naprawdę ważne.',
    },
    {
      id: 6,
      title: 'Czy Springfield nadaje się dla każdej firmy?',
      description: 'Tak, niezależnie od wielkości zespołu, Springfield pomaga usprawnić pracę, zwiększyć efektywność i skalować firmę bez dodatkowych kosztów.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  function handleQuestionClick(id) {
    setActiveIndex((prev) => (prev === id ? null : id));
  } //You can close the question by clicking on it once again

  return (
    <section className="faq wrapper pt-20 pb-20">
      <h2 className="text-h2 m-5 text-center">Najczęściej zadawane <span className="gradient-blue-to-green">pytania</span></h2>
      <div className="faq-container">
        {questions.map((question) => (
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
