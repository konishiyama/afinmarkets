"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./layouts/Layout";
import SectionContainer from "./layouts/SectionContainer";
import ScrollOffset from "./common/ScrollOffset";
import bgImage from "/public/images/blob.svg";

interface Dictionary {
  title1: string;
  titleBlue: string;
  title2: string;
  comment: string;
  placeholder: string;
  button: string;
}

interface JoinProps {
  join_props: Dictionary;
  lang: Locale;
}

const Join = ({ join_props, lang }: JoinProps) => {
  return (
    <Layout backgroundColor="bg-white">
      <SectionContainer section_title="Join">
        <div
          className="py-20 bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage.src})`,
          }}
        >
          <div className="relative lg:px-16 py-12">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                <span className="">{join_props.title1}</span>
                <span className="text-blue-500">{join_props.titleBlue}</span>
                <span className="">{join_props.title2}</span>
              </h2>
              <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn">
                {join_props.comment}
              </p>
              <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn">
                <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                  <svg
                    className="h-6 w-6 my-auto text-blueGray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input
                    className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                    type="text"
                    placeholder={join_props.placeholder}
                  ></input>
                </div>
                <button
                  className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                  type="submit"
                >
                  {join_props.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Join;
