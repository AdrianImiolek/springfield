import { SplideSlide } from '@splidejs/react-splide';


export default function Carousel({img}) {
  return (
    <SplideSlide
      className={`carousel-card-how-it-works shrink rounded-2xl shadow-2xl hidden md:block` }
    >
      <img
        className="carousel-card-img w-full object-cover rounded-2xl" 
        src={img}
      />
    </SplideSlide>
  );
}
