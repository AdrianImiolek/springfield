import './opinions.css';
import Opinion from './Opinion';

export default function Opinions() {
  const opinions = [
    {
      id: 1,
      img: './opinions/Alicja-img.webp',
      name: 'Alicja',
      opinion: 'Springfield zmieniło sposób, w jaki zarządzam zespołem. Wszystko w jednym miejscu!',
    },

    {
      id: 2,
      img: './opinions/Bob-img.webp',
      name: 'Bob',
      opinion: 'Serio, gdzie to było przez całe moje życie zawodowe?',
    },

    {
      id: 3,
      img: './opinions/Sandra-img.webp',
      name: 'Sandra',
      opinion: 'Automatyzacja zrobiła za mnie tyle roboty, że szef myśli że mam supermoce.',
    },
    {
      id: 4,
      img: './opinions/Brad-img.webp',
      name: 'Brad',
      opinion: 'Wdrożyliśmy Springfield w piątek. W poniedziałek zespół nie chciał wracać do starych narzędzi.',
    },

    {
      id: 5,
      img: './opinions/Ryszard-img.webp',
      name: 'Ryszard',
      opinion: `Mój zespół przestał pytać 'gdzie to jest?' — wszystko jest w Springfield.`,
    },
    {
      id: 6,
      img: './opinions/Monika-img.webp',
      name: 'Monika',
      opinion: 'W końcu nie muszę mieć 15 zakładek otwartych naraz. Genialne.',
    },

  ];

  return (
    <section className="opinions pt-20 pb-20">
      <h2 className="text-h2 text-center m-5">
        <span className="gradient-green-to-pink">Opinie</span> na nasz temat
      </h2>
      <div className="carousel-opinions p-10">
        <div className="carousel-opinions-inner">
          {opinions.map((opinion) => (
            <Opinion 
            key={opinion.id}
            img={opinion.img}
            name={opinion.name}
            opinion={opinion.opinion}
            />
          ))}

          {opinions.map((opinion) => (
            <Opinion 
            key={opinion.id}
            img={opinion.img}
            name={opinion.name}
            opinion={opinion.opinion}
            aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
