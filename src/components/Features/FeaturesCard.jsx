import WavesTop from '../Waves/WavesTop';
export default function FeaturesCard({ title, text, index, features }) {
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
    {
      id: 4,
      color: blueColor[0],
      shadow: blueColor[1],
      fill: blueColor[2],
      opacity: wavesOpacity,
      bg: blueColor[3],
    },
    {
      id: 5,
      color: greenColor[0],
      shadow: greenColor[1],
      fill: greenColor[2],
      opacity: wavesOpacity,
      bg: greenColor[3],
    },
    {
      id: 6,
      color: pinkColor[0],
      shadow: pinkColor[1],
      fill: pinkColor[2],
      opacity: wavesOpacity,
      bg: greenColor[3],
    },
  ];

  const style = colors[index % 3];

  return (
    <div
      className={`features-card transform-gpu overflow-hidden rounded-2xl border-1 shadow-md  ${style.color} ${style.shadow} ${style.bg} `}
    >
      <div className="w-[120%]">
        <WavesTop style={style} />
      </div>

      <div className="p-4">
        <h3 className="text-h3 font-bold">{title}</h3>
        <p className="text-body-sm">{text}</p>
        {features && (
          <ul className="mt-3 flex flex-col gap-1">
            {features.map((feature, i) => (
              <li key={i} className="text-body-sm flex items-center gap-2">
                <span>✓</span> {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
