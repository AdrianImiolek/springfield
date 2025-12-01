export default function PricesCard({ title, text, features, button }) {
  return (
    <div className="price-card shadow-main row-span-2 grid grid-rows-subgrid justify-between rounded-4xl p-5 shadow-sm duration-300 hover:shadow-xl">
      <div className="price-card__container">
        <h3 className="price-card__title text-h3">{title}</h3>

        <p className="price-card__text text-body">{text}</p>
        <h4 className="price-card__functions text-h4 mt-5">Funkcje</h4>
        <ul className="price-card__list mt-1 inline-block">
          {features.map((feature, index) => (
            <li key={index} className="price-card__list-item text-body-sm mt-1">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="price-card__button text-button bg-main hover:bg-main-dark mt-5 cursor-pointer rounded-4xl p-2 duration-300">
        {button}
      </button>
    </div>
  );
}
