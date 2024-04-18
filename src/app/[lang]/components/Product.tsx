"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./Layout";
import SectionContainer from "./SectionContainer";
import productBgImage from "/public/images/pattern.png";
import chartImage from "/public/images/dashboard.png";

interface Dictionary {
  Product: string;
  Features: string;
  Team: string;
  JoinUs: string;
}

interface ProductProps {
  product_props: Dictionary;
  lang: Locale;
}

const Product = ({ product_props, lang }: ProductProps) => {
  return (
    <Layout>
      <SectionContainer>
        <div id="Product" className="max-w-lg mx-auto mb-20 text-center">
          <span className="inline-block text-xs py-1 px-3 text-white font-semibold bg-blue rounded-xl wow animate__animated animate__fadeIn">
            How we work
          </span>
          <h2 className="my-3 text-3xl md:text-4xl text-blueGray font-bold font-heading wow animate__animated animate__fadeIn">
            Partner Company Business And Me Success Fully
          </h2>
          <p className="text-blueGray wow animate__animated animate__fadeIn">
            IT Solution For Your Business Is Best Theme
          </p>
        </div>
        <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
          <Image src={productBgImage} alt="Afin Tech Logo" className="" />
          <div
            className="absolute"
            style={{
              top: "9%",
              left: "14%",
              width: "72%",
              height: "66%",
            }}
          >
            <Image
              src={chartImage}
              alt="Afin Tech Logo"
              className="jump rounded wow animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Product;
