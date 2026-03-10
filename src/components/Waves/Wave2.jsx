export default function Wave2({fill,opacity,}) {
  return (
    <svg className={`absolute w-[120%] top-0 ${fill}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fillOpacity={opacity}
        d="M0,192L48,213.3C96,235,192,277,288,298.7C384,320,480,320,576,282.7C672,245,768,171,864,165.3C960,160,1056,224,1152,240C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}
