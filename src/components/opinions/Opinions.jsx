import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import OpinionsCarousel from './OpinionsCarousel';

export default function Opinions(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const opinions = [
    {
      user: 'Alicja',
      userImage: '/images/opinions/Alicja-img.webp',
      opinion:
        '„Uwielbiam to, że wszystko mamy w jednym miejscu. Dzięki Springfield spotkania są krótsze, zadania bardziej przejrzyste, a współpraca w zespole dużo sprawniejsza.”',
    },
    {
      user: 'Bob',
      userImage: '/images/opinions/Bob-img.webp',
      opinion:
        '„Springfield naprawdę zmienił sposób, w jaki nasz zespół pracuje.Wszystkie narzędzia w jednym miejscu - Slack, Jira, dokumenty - oszczędza mnóstwo czasu i poprawia komunikację. Polecam każdemu zespołowi!”',
    },
    {
      user: 'Sandra',
      userImage: '/images/opinions/Sandra-img.webp',
      opinion:
        '„Platforma jest bardzo intuicyjna i ułatwia śledzenie projektów. Na początku potrzebowaliśmy chwili, żeby się przyzwyczaić, ale teraz nie wyobrażam sobie pracy bez Springfield.”',
    },
  ];

  return (
    <section className="opinions wrapper p-3">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {opinions.map((opinion, index) => (
            <OpinionsCarousel
              key={index}
              user={opinion.user}
              image={opinion.userImage}
              opinion={opinion.opinion}
            />
          ))}
    
          </div>
        </div>
    </section>
  );
}
