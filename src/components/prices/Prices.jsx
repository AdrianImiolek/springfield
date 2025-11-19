import PricesCard from './PricesCard';

export default function Prices(props) {
  const pricesCards = [
    {
      title: 'Starter',
      text: 'Dla freelancerów i małych zespołów zaczynających pracę z Springfield.',
      features: [
        'Do 3 aktywnych projektów',
        'Integracja z Slackiem i Notion',
        '2 GB przestrzeni na pliki',
        'Podstawowe raporty i statystyki',
      ],
      button: 'Zacznij za darmo',
    },
    {
      title: 'Pro',
      text: 'Dla zespołów, które chcą usprawnić komunikację i przepływ pracy.',
      features: [
        'Nielimitowane projekty',
        'Zaawansowane dashboardy i automatyzacje',
        '20 GB przestrzeni na pliki',
        'Priorytetowe wsparcie',
      ],
      button: 'Wybierz Pro',
    },
    {
      title: 'Business',
      text: 'Dla firm potrzebujących pełnej kontroli, bezpieczeństwa i raportowania.',
      features: [
        'Wszystko z planu Pro',
        'Dedykowany opiekun konta',
        'Własna domena i branding',
        'Integracje z API i SSO',
        'Analityka zespołowa i eksport danych',
      ],
      button: 'Skontaktuj się z nami',
    },
  ];

  return (
    <section
      className="prices wrapper flex min-h-screen flex-col justify-center overflow-hidden p-3"
      data-usal="split-item split-fade-l split-delay-500 once"
      id="prices"
    >
      <h2 className="prices__title text-h2 mt-5 mb-5">Cennik</h2>
      <div className="prices__cards grid justify-center gap-5 md:grid-cols-3">
        {pricesCards.map((card, index) => (
          <PricesCard
            key={index}
            title={card.title}
            text={card.text}
            features={card.features}
            button={card.button}
          />
        ))}
      </div>
    </section>
  );
}
