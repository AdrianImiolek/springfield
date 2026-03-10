import Wave1 from './Wave1';
import Wave2 from './Wave2';
import Wave3 from './Wave3';

export default function WavesTop({ style }) {
  return (
    <div className="relative">
      <Wave1 fill={style.fill} opacity={style.opacity[0]} />
      <Wave2 fill={style.fill} opacity={style.opacity[1]} />
      <Wave3 fill={style.fill} opacity={style.opacity[2]} />
    </div>
  );
}