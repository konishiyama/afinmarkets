"use client";

import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import logo from "/public/images/20240414_logo.png";
import Layout from "./layouts/Layout";

interface Dictionary {
  address: string;
  phone: string;
  email: string;
}

interface FooterProps {
  footer_props: Dictionary;
  lang: Locale;
}

const Footer = ({ footer_props, lang }: FooterProps) => {
  return (
    <footer className="py-20 bg-white">
      <Layout>
        <div
          className="container px-4 mx-auto wow animate__animated animate__fadeIn"
          data-wow-delay=".3s"
        >
          <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
            <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
              <Link
                className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none"
                href={`/${lang}`}
              >
                <Image className="w-56" src={logo} alt="Monst" />
              </Link>
            </div>
            <div className="hidden lg:flex lg:w-2/5 px-3 mb-8 lg:mb-0"></div>
            <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Office
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {footer_props.address}
              </p>
            </div>
            <div className="w-full lg:w-1/5 px-3">
              <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                Contacts
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {footer_props.phone}
              </p>
              <p className="lg:text-lg text-blueGray-400">
                {footer_props.email}
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <p className="text-sm text-blueGray-400">
              © 2024. Shangri-la Inc. All rights reserved.
            </p>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
