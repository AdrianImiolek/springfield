import { SplideSlide } from '@splidejs/react-splide';


export default function Carousel({img}) {
  return (
    <SplideSlide
      className={`carousel-card-how-it-works shrink rounded-2xl shadow-2xl`}
    >
      <img
        className="carousel-card-img w-full object-cover object-center rounded-2xl" 
        src={img}
      />
    </SplideSlide>
  );
}
