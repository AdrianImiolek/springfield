export default function Opinion({
  index,
  img,
  name,
  opinion,
  ...props
}) {
  return (
    <div
      {...props}
      className="card-opinion transition-transform duration-300 hover:scale-110"
    >
        <div className="flex justify-center">
          <img className="h-50 w-50 rounded-[100%] object-cover" src={img} />
        </div>
        <div className="flex flex-col items-center flex-1">
          <p className="text-body">{name}</p>
          <p className="text-body-sm italic">"{opinion}"</p>
      </div>
    </div>
  );
}
