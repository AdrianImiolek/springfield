import AwardsCard from './AwardsCard';

export default function Awards(props) {
  const awards = [
    {
      number: '80000',
      text: 'Aktywnych użytkowników miesięcznie',
      icon: 'bx bx-user',
    },
    {
      number: '320',
      text: 'Zespoły korzystające ze springfield',
      icon: `bx bx-briefcase-alt-2`,
    },
    {
      number: '25',
      text: 'Zintegrowanych narzędzi',
      icon: 'bx bx-windows',
    },
    {
      number: '1500',
      text: 'Pracowników w naszej organizacji',
      icon: 'bx bx-briefcase-alt-2',
    },
    {
      number: '10',
      text: 'Biur na całym świecie',
      icon: 'bx bx-building',
    },
    {
      number: '800000',
      text: 'Pozytywnych opinii użytkowników',
      icon: 'bx bx-chat',
    },
  ];

  return (
    <section className="awards wrapper overflow-hidden" data-usal="split-item split-fade-r split-delay-500 once">
      <div className="awards__cards grid justify-center gap-5 p-3 md:grid-cols-3">
        {awards.map((award, index) => (
          <AwardsCard
            key={index}
            number={award.number}
            text={award.text}
            icon={award.icon}
          />
        ))}
      </div>
    </section>
  );
}
