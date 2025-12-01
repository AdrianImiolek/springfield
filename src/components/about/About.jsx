import AboutSection from './AboutSection';
export default function About(props) {
  const aboutSection = [
    {
      title: 'Nasz zespół',
      text: 'Jesteśmy zespołem ludzi, którzy lubią, gdy rzeczy po prostu działają. Każdy z nas kiedyś frustrował się tym, że proste zadania potrafią rozpaść się między 10 aplikacjami. Dlatego połączyliśmy nasze doświadczenia z designu, developmentu i zarządzania, by stworzyć jedno narzędzie, które naprawdę porządkuje pracę.',
      text2nd:
        ' Pracujemy zdalnie, ale łączy nas wspólny cel – tworzyć produkty, które pomagają innym pracować mądrzej, a nie więcej.',
    },
    {
      title: 'Dlaczego to robimy',
      text: '  Nie tworzymy kolejnego narzędzia. Tworzymy spokój. W świecie powiadomień, sprintów i deadlinów łatwo stracić kontrolę nad tym, co naprawdę ważne. Springfield powstał, by przywrócić harmonię – między zespołem, celami i narzędziami.',
      text2nd:
        ' Wierzymy, że dobra współpraca zaczyna się od prostoty i zaufania. Dlatego wszystko, co projektujemy, ma jeden cel: ułatwiać, a nie komplikować.',
    },
    {
      title: 'Nasza wizja',
      text: '  Chcemy, żeby praca zespołowa była tak naturalna, jak rozmowa.Springfield to pierwszy krok – miejsce, które łączy ludzi i narzędzia w harmonijny ekosystem.',
      text2nd:
        ' Nie chodzi o to, by mieć więcej aplikacji. Chodzi o to, by wszystko działało razem.',
    },
  ];

  return (
    <section
      className="about wrapper flex min-h-screen flex-col justify-center overflow-hidden p-3"
      data-usal="split-item split-fade-l split-delay-100 once"
    >
      <h2 className="about__title text-h2 mt-5 mb-5"  id="about">O nas</h2>
      {aboutSection.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          text={section.text}
          text2nd={section.text2nd}
        />
      ))}
    </section>
  );
}
