"use client";

import Link from "next/link";
import Image from "next/image";
import coverImageSvg from "/public/images/Currency-rafiki.svg";
import { Feature } from "../common/interfaces";

interface FeatureProps {
  feature_props: Feature;
  featureId: string;
}

const FeatureCard = ({ feature_props, featureId }: FeatureProps) => {
  const image = require(`/public/images/${feature_props.img_path}`).default;

  return (
    <li
      className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
      data-wow-delay=".3s"
    >
      <div className="p-12 bg-white shadow rounded">
        <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
          {featureId}
        </div>
        <Image className="h-36 mx-auto my-4" src={image} alt="Monst" />
        <h3 className="mb-2 font-bold font-heading text-xl">
          {feature_props.title}
        </h3>
        <p className="text-sm text-blueGray-400 leading-relaxed">
          {feature_props.comment}
        </p>
      </div>
    </li>
  );
};

export default FeatureCard;
