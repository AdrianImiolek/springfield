import Waves from '../Waves/WavesTop';

export default function Card({
  index,
  title,
  list,
  price,
  pricePerSeat,
}) {
  const wavesOpacity = [0.6, 0.4, 0.3];
  const blueColor = [
    'border-main-blue',
    'shadow-main-blue',
    'fill-main-blue',
    'bg-main-blue/10',
  ];
  const pinkColor = [
    'border-main-pink',
    'shadow-main-pink',
    'fill-main-pink',
    'bg-main-pink/10',
  ];
  const greenColor = [
    'border-main-green',
    'shadow-main-green',
    'fill-main-green',
    'bg-main-green/10',
  ];

  const colors = [
    {
      id: 1,
      color: pinkColor[0],
      shadow: pinkColor[1],
      fill: pinkColor[2],
      opacity: wavesOpacity,
      bg: pinkColor[3],
    },
    {
      id: 2,
      color: blueColor[0],
      shadow: blueColor[1],
      fill: blueColor[2],
      opacity: wavesOpacity,
      bg: blueColor[3],
    },
    {
      id: 3,
      color: greenColor[0],
      shadow: greenColor[1],
      fill: greenColor[2],
      opacity: wavesOpacity,
      bg: greenColor[3],
    },
  ];

  const style = colors[index % 3];

  return (
    <div
      className={`card flex transform-gpu flex-col justify-between overflow-hidden rounded-2xl border-1 shadow-md ${index === 3 ? 'sm:col-span-2' : ''} ${style.color} ${style.shadow} ${style.bg} lg:col-span-1`}
    >
      <div className="p-4">
        <h3 className="text-h3 text-left">{title}</h3>
        <p className="text-body">{price} zł</p>
        <p> {pricePerSeat}</p>
        <ul className="text-left">
          {list.map((item, index) => (
            <li key={index} className="text-body-sm text-gray-800">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[120%] rotate-180">
        <Waves style={style} />
      </div>
    </div>
  );
}
