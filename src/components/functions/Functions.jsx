import FunctionsCard from './FunctionsCard';

export default function Functions(props) {
  const cardInfo = [
    {
      title: 'Integracja Wszystkich Narzędzi',
      text: 'Springfield łączy Twoje ulubione aplikacje - od Slacka po Jirę - w jednym intuicyjnym miejscu. Oszczędzasz czas, nie przeskakując między zakładkami. Wszystkie powiadomienia, zadania i pliki masz w jednym widoku.',
    },
    {
      title: 'Inteligentne Podsumowania Aktywności',
      text: 'Springfield generuje codzienne lub tygodniowe raporty z najważniejszymi zmianami z wszystkich zintegrowanych aplikacji. Nie musisz przeglądać każdej platformy osobno - masz szybki wgląd w to, co istotne.',
    },
    {
      title: 'Centrum Zadań i Priorytetów',
      text: 'Wszystkie zadania z różnych narzędzi (np. Jira, Trello, Asana) są agregowane w jednym, spójnym widoku. Widzisz pełen obraz swojej pracy i możesz ustalać priorytety niezależnie od źródła zadania.',
    },
    {
      title: 'Bezpieczne Łączenie i Uprawnienia',
      text: 'Springfield zapewnia bezpieczne połączenia z zewnętrznymi narzędziami oraz granularne zarządzanie dostępem. Masz kontrolę nad tym, kto co widzi, bez ryzyka utraty danych.',
    },
    {
      title: 'Centralny Hub Komunikacji',
      text: 'Integracja z komunikatorami (Slack, Teams) pozwala prowadzić rozmowy w kontekście konkretnych projektów i zadań. Koniec z rozproszoną komunikacją - wszystko dzieje się tam, gdzie Twoja praca.',
    },
    {
      title: 'Zaawansowane Wyszukiwanie',
      text: 'Wpisz frazę raz, a Springfield przeszuka Slacka, Jirę, Google Drive i inne narzędzia jednocześnie. Od razu znajdujesz potrzebne informacje - bez frustracji i tracenia czasu.',
    },
  ];

  return (
    <section
      className="functions wrapper flex min-h-screen flex-col justify-center overflow-hidden p-3"
      data-usal="split-item split-fade-r split-delay-500 once"
    >
      <h2 className="functions__title text-h2 mt-5 mb-5" id="features">
        Funkcje
      </h2>
      <div className="functions__cards mt-3 grid grid-rows-[repeat(auto-fill,_auto_1fr)] justify-center gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cardInfo.map((card, index) => (
          <FunctionsCard
            key={index}
            title={card.title}
            text={card.text}
            usal={card.usal}
          />
        ))}
      </div>
    </section>
  );
}
