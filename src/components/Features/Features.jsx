import FeaturesCard from "./FeaturesCard"
import { featuresCards } from "./features.data"

export default function Features({ detailed = false }) {
  return (
    <section className="features wrapper pt-20 pb-20" id="features">
      <h2 className="text-h2 m-5 text-center">Wszystkie narzędzia których <span className="gradient-blue-to-green">potrzebujesz</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {featuresCards.map((card) => (
          <FeaturesCard
            key={card.id}
            index={card.id}
            title={card.title}
            text={card.text}
            features={detailed ? card.features : null}  // ← one line controls it
          />
        ))}
      </div>
    </section>
  )
}