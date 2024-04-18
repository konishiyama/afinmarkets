"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import Layout from "./Layout";
import SectionContainer from "./SectionContainer";
import profImage from "/public/images/konishiyama.jpg";

interface Dictionary {
  Product: string;
  Features: string;
  Team: string;
  JoinUs: string;
}

interface TeamProps {
  team_props: Dictionary;
  lang: Locale;
}

const Team = ({ team_props, lang }: TeamProps) => {
  return (
    <Layout>
      <SectionContainer>
        <div id="Team" className="max-w-lg mx-auto mb-12 text-center">
          <span
            className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            Our Team
          </span>
          <h2
            className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            Meet our awesome team
          </h2>
          <p
            className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
            eget justo et iaculis.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div
            className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
            data-wow-delay=".1s"
          >
            <div className="px-6 py-10 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <Image
                  className="h-16 w-16 rounded-full object-cover"
                  src={profImage}
                  alt="Monst"
                />
                <div className="pl-4">
                  <p className="text-lg font-bold">Michael Jackson</p>
                  <p className="text-blue-600">CEO</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
            data-wow-delay=".3s"
          >
            <div className="px-6 py-10 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <Image
                  className="h-16 w-16 rounded-full object-cover"
                  src={profImage}
                  alt="Monst"
                />
                <div className="pl-4">
                  <p className="text-lg font-bold">Oprah Winfrey</p>
                  <p className="text-blue-600 text-sm">Head of Development</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
            data-wow-delay=".5s"
          >
            <div className="px-6 py-10 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <Image
                  className="h-16 w-16 rounded-full object-cover"
                  src={profImage}
                  alt="Monst"
                />
                <div className="pl-4">
                  <p className="text-lg font-bold">Leonardo</p>
                  <p className="text-blue-600 text-sm">Head of Operations</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
            data-wow-delay=".7s"
          >
            <div className="px-6 py-10 bg-white shadow rounded">
              <div className="flex items-center mb-4">
                <Image
                  className="h-16 w-16 rounded-full object-cover"
                  src={profImage}
                  alt="Monst"
                />
                <div className="pl-4">
                  <p className="text-lg font-bold">Jerry Seinfeld</p>
                  <p className="text-blue-600 text-sm">Head of Development</p>
                </div>
              </div>
              <p className="leading-loose text-blueGray-400 mb-5 text-sm">
                Donec consequat tortor risus, at auctor felis consequat a. Donec
                quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar.
                Vestibulum non quam velit.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Team;
