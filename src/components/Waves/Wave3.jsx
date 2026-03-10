export default function Wave3({fill,opacity}) {
  return (
    <svg
      className={`absolute top-0 ${fill}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fillOpacity={opacity}
        d="M0,320L48,288C96,256,192,192,288,186.7C384,181,480,235,576,234.7C672,235,768,181,864,186.7C960,192,1056,256,1152,256C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}
