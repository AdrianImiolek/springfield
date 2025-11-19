export default function FunctionsCard({ title, text }) {
  return (
    <div
      className="card shadow-main rounded-4xl p-5 shadow-sm duration-300 hover:shadow-xl"
    >
      <h3 className="card__title text-h3 border-main border-b-2 pb-2">
        {title}
      </h3>
      <p className="card__text text-body mt-3">{text}</p>
    </div>
  );
}
