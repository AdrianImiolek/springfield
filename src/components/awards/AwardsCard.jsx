export default function AwardsCard({ number, text, icon }) {
  return (
    <div className="awards__card flex flex-col items-center">
      <p className="awards__number text-body"data-usal={`count-[${number}] duration-2500 once`}> + {number} <i className={`awards__icon ${icon}`}></i></p>
      <p className="awards__text text-body-sm">{text}</p>
    </div>
  );
}
