"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import coverImage from "/public/images/Currency-rafiki.png";
import coverImageSvg from "/public/images/Currency-rafiki.svg";

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
    <div className="bg-blueGray-50">
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
          </div>
          <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                <span>We are</span>
                <span className="text-blue-500"> awesome team</span>
                <br />
                <span>for your business dream</span>
              </h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis. Quisque vitae nulla malesuada,
                auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
                imperdiet.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6 text-center">
            <div
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".3s"
            >
              <div className="p-12 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  1
                </div>
                <Image
                  className="h-36 mx-auto my-4"
                  src={coverImageSvg}
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project Initialization
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  Project initiation ensures that you lay a strong foundation
                  for a new project in your company our team.
                </p>
              </div>
            </div>
            <div
              className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
              data-wow-delay=".5s"
            >
              <div className="p-12 bg-white shadow rounded">
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  2
                </div>
                <Image
                  className="h-36 mx-auto my-4"
                  src={coverImageSvg}
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project planning
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  A project plan is essential to keep everything related to the
                  project organized, methodical, and on track.
                </p>
              </div>
            </div>
            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
              <div
                className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                  3
                </div>
                <Image
                  className="h-36 mx-auto my-4"
                  src={coverImageSvg}
                  alt="Monst"
                />
                <h3 className="mb-2 font-bold font-heading text-xl">
                  Project organization
                </h3>
                <p className="text-sm text-blueGray-400 leading-relaxed">
                  Moving forward you will be able to keep yourself and your team
                  on track, and address challenges early.
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Layout>
    </div>
  );
};

export default Features;
