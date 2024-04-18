"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import profImage from "/public/images/konishiyama.jpg";

interface Dictionary {
  Product: string;
  Features: string;
  Team: string;
  JoinUs: string;
}

interface FeaturesProps {
  features_props: Dictionary;
  lang: Locale;
}

const Features = ({ features_props, lang }: FeaturesProps) => {
  return (
    <Layout>
      <SectionContainer>
        <ScrollOffset id="Features" />
        <div className="max-w-lg mx-auto mb-12 text-center">
          <span
            className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            Features
          </span>
          <h2
            className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            features underconstruction...
          </h2>
          <p
            className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Features;
