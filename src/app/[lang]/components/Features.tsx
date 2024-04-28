"use client";

import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import FeatureCards from "./items/FeatureCards";
import { Cards } from "./common/interfaces";

interface FeaturesProps {
  features_props: {
    headline1: string;
    headline2: string;
    headline3: string;
    comment: string;
    feature_cards_props: Cards;
  };
}

const Features = ({ features_props }: FeaturesProps) => {
  return (
    <div className="bg-blueGray-50">
      <div className="px-4 mx-auto xl:max-w-screen-xl">
        <SectionContainer>
          <ScrollOffset id="Features" />
          <div className="max-w-lg mx-auto mb-12 text-center">
            <span
              className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              Features
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                <span>{features_props.headline1}</span>
                <span className="text-blue-500">
                  {features_props.headline2}
                </span>
                <br />
                <span>{features_props.headline3}</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                {features_props.comment}
              </p>
            </div>
          </div>
          <FeatureCards
            feature_cards_props={features_props.feature_cards_props}
          />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Features;
