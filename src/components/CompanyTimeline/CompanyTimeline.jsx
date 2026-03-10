import CompanyTimelineDate from './CompanyTimelineDate';

export default function CompanyTimeline() {
  const dates = [
    {
      id: 1,
      title: 'Początek pomysłu',
      year: '2021',
      text: 'Narodziła się idea stworzenia Springfield – platformy, która łączy zarządzanie zadaniami, CRM i analizę danych w jednym miejscu.',
    },
    {
      id: 2,
      title: 'Pierwsza wersja produktu',
      year: '2022',
      text: 'Powstała pierwsza wersja Springfield skupiona na zarządzaniu zadaniami i organizacji pracy zespołów.',
    },
    {
      id: 3,
      title: 'Rozwój funkcji CRM',
      year: '2023',
      text: 'Platforma została rozszerzona o moduł CRM umożliwiający zarządzanie klientami i monitorowanie procesów sprzedażowych.',
    },
    {
      id: 4,
      title: 'Automatyzacja workflow',
      year: '2024',
      text: 'Dodaliśmy automatyzację procesów biznesowych, która pozwala firmom ograniczyć ręczne zadania i zwiększyć efektywność pracy.',
    },
    {
      id: 5,
      title: 'Zaawansowana analityka',
      year: '2025',
      text: 'Springfield wprowadza narzędzia analityczne i monitoring KPI, pomagając firmom podejmować decyzje w oparciu o dane.',
    },
    {
      id: 6,
      title: 'Rozwój platformy',
      year: '2026',
      text: 'Springfield staje się kompleksową platformą wspierającą zespoły w zarządzaniu projektami, klientami i procesami biznesowymi.',
    },
  ];

  return (
    <section className="company-timeline wrapper">
      {dates.map((date,index) => (
        <CompanyTimelineDate 
        key={date.id}
        title={date.title}
        year={date.year}
        text={date.text}
        isLast={index === dates.length - 1}    
        />
      ))}
    </section>
  );
}
