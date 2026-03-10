import Text from '../Text/Text';

export default function WhySpringfield() {
  const whys = [
    {
      id: 1,
      text: 'Springfield to więcej niż narzędzie do zarządzania zadaniami. To kompleksowa platforma wspierająca codzienną pracę zespołów i rozwój firm.',
    },
    {
      id: 2,
      text: 'Łączymy w jednym miejscu funkcje zarządzania projektami, CRM, analizy danych oraz automatyzacji procesów biznesowych. Dzięki temu firmy mogą działać szybciej, sprawniej i podejmować lepsze decyzje.',
    },
    {
      id: 3,
      text: 'Naszym celem jest dostarczanie technologii, która realnie wspiera rozwój organizacji i pomaga zespołom osiągać lepsze wyniki.',
    },
  ];

  return (
    <section className="why-springfield wrapper pt-20 pb-20">
      <h2 className="text-h2 text-center">
        {' '}
        <span className="gradient-pink-to-blue">Dlaczego</span> Springfield?
      </h2>
      {whys.map((why) => (
        <Text key={why.id} text={why.text} />
      ))}
    </section>
  );
}
