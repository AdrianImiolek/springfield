import Carousel from '../Carousel/Carousel';
import { Splide, SplideTrack } from '@splidejs/react-splide';

export default function HowItWorks() {
  const howItWorks = [
    {
      id: 1,
      title: 'Połącz swoje narzędzia',
      text: 'Połącz istniejące aplikacje jak Jira, Slack, GitHub jednym kliknięciem',
      style: 'gradient-pink-to-blue ',
    },
    {
      id: 2,
      title: 'Wszystko w jednym miejscu',
      text: 'Zobacz wszystkie zadania, wiadomości i dane w jednym panelu',
      style: 'gradient-blue-to-pink',
    },
    {
      id: 3,
      title: 'Wróć do pracy ',
      text: 'Przestań przełączać się między zakładkami i skup się na tym, co naprawdę ważne',
      style: 'gradient-pink-to-green',
    },
  ];

  const imgs = [
    { id: 1, img: '/carousel/slide1.png' },
    { id: 2, img: '/carousel/slide2.png' },
    { id: 3, img: '/carousel/slide3.png' },
  ];

  return (
    <section className="how-it-works wrapper text-body pt-20 pb-20">
      <h2 className="text-h2 m-5 text-center">
        Jak<span className="gradient-pink-to-blue"> działa </span>Springfield?
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        <Splide
          className="carousel-how-it-works shadow-main-pink overflow-hidden rounded-2xl shadow-md"
          aria-hidden="true"
          options={{
            type: 'loop',
            infinite: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            easing: 'linear',
          }}
        >
          {imgs.map((img) => (
            <Carousel key={img.id} index={img.id} img={img.img} />
          ))}
        </Splide>
        <div>
          <p>To proste:</p>
          <ul>
            {howItWorks.map((tool) => (
              <li key={tool.id} className="m-5">
                <strong className={`${tool.style} before:content-['•']`}>
                  {tool.title}
                </strong>
                <ul>
                  <li className="text-body-sm pl-6">{tool.text}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
