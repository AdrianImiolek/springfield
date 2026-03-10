export default function TrustedUsLogos({
  index,
  name,
  logo,
  ...props
}) {
  return (
    <div {...props} className="carousel-trusted-us-group">
      <div
        className="carousel-trusted-us-card max-w-50 p-5 transition-transform duration-300 hover:scale-110 md:max-w-75 lg:max-w-80 xl:p-10"
      >
        <img src={logo} alt={name} />
      </div>
    </div>
  );
}
