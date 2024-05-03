"use client";

import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import Chart from "./items/Chart";
import productBgImage from "/public/images/pattern.png";

interface ProductProps {
  product_props: {
    Product: string;
    Features: string;
    Team: string;
    JoinUs: string;
  };
}

const Product = ({ product_props }: ProductProps) => {
  return (
    <Layout backgroundColor="bg-blueGray-50">
      <SectionContainer section_title="Product">
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
      </SectionContainer>
    </Layout>
  );
};

export default Product;
