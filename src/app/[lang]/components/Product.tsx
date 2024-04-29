"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import Chart from "./items/Chart";
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
    <Layout backgroundColor="bg-blueGray-50">
      <div className="flex-wrap items-center xl:px-16 py-12 md:pb-12">
        <ScrollOffset id="Product" />
        <div className="max-w-lg mx-auto mb-12 text-center">
          <div className="max-w-lg mx-auto text-center">
            <span
              className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              Product
            </span>
          </div>
        </div>
        <div className="max-w-lg mx-auto mb-12 text-center">
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
            <Chart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
