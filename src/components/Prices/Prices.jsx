import PricesCard from './PricesCard';

export default function Prices() {
  const prices = [
    {
      id: 1,
      title: 'Free',
      price: 0,
      pricePerSeat: 'Za darmo na zawsze',
      list: [
        'Podstawowe zarządzanie zadaniami',
        'Śledzenie czasu',
        'Integracja z 1 narzędziem',
        '1GB przestrzeni dyskowej',
      ],
    },
    {
      id: 2,
      title: 'Basic',
      price: 35,
      pricePerSeat: 'Użytkownik / miesiąc',
      list: [
        'Pełny CRM',
        'Analiza danych i raporty KPI',
        'Automatyzacja (250 akcji / miesiąc)',
        'Integracja z 10 narzędziami',
        'Współpraca zespołowa',
        '20GB przestrzeni dyskowej',
      ],
    },
    {
      id: 3,
      title: 'Pro',
      price: 80,
      pricePerSeat: 'Użytkownik / miesiąc',
      list: [
        'Asystent AI',
        'Zaawansowana automatyzacja (bez limitu)',
        'Nieograniczone integracje',
        'Zaawansowana analityka i raporty',
        'Nieograniczona przestrzeń dyskowa',
        'Dedykowany opiekun klienta 24/7',
      ],
    },
  ];

  return (
    <section className="prices wrapper pt-20 pb-20" id="prices">
      <h2 className="text-h2 m-5 text-center">
        <span className="gradient-blue-to-green">Ceny</span>{' '}
      </h2>

      <div className="cards grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {prices.map((price) => (
          <PricesCard
            key={price.id}
            index={price.id}
            title={price.title}
            price={price.price}
            pricePerSeat={price.pricePerSeat}
            list={price.list}
          />
        ))}
      </div>
    </section>
  );
}
