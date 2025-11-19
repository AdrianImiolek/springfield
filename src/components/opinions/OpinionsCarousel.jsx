export default function OpinionsCarousel({ user, image, opinion }) {
 

  return (
    <div className="opinions__slide flex flex-col basis-full shrink-0 grow-0 items-center">
      <img
        className="h-[100px] w-[100px] rounded-full object-cover md:h-[200px] md:w-[200px]" src={image}
        alt=""
      />
      <h3 className="opinions__user-name text-h3">{user}</h3>
      <p className="opinions__description text-body italic max-w-3xl lg:max-w-7xl p-2">{opinion}</p>
    </div>

    
  );
}


