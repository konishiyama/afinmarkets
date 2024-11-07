"use client";

import SectionContainer from "./layouts/SectionContainer";
import FeatureCards from "./items/FeatureCards";
import Layout from "./layouts/Layout";
import { FeaturesProps, Cards } from "../../../interfaces";

const Features = ({ features_props }: FeaturesProps) => {
  return (
    <Layout backgroundColor="bg-white">
      <SectionContainer section_title="Features">
        {/* <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
              <span>{features_props.headline1}</span>
              <span className="text-blue-500">{features_props.headline2}</span>
              <br />
              <span>{features_props.headline3}</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
              {features_props.comment}
            </p>
          </div>
        </div> */}
        <FeatureCards
          feature_cards_props={features_props.feature_cards_props}
        />
      </SectionContainer>
    </Layout>
  );
};

export default Features;
