import FeatureCard from "./FeatureCard";
import profImage from "/public/images/konishiyama.jpg";
import { Cards } from "../common/interfaces";

interface FeatureCardsProps {
  feature_cards_props: Cards;
}

const FeatureCards = ({ feature_cards_props }: FeatureCardsProps) => {
  return (
    <ul className="flex flex-wrap -mx-3 -mb-6 text-center">
      {Object.entries(feature_cards_props).map(([featureId, feature_props]) => (
        <FeatureCard
          key={featureId}
          feature_props={feature_props}
          featureId={featureId}
        />
      ))}
    </ul>
  );
};

export default FeatureCards;
