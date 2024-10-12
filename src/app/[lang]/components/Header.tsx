"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import LocaleSwitcher from "./items/LocaleSwitcher";
import logo from "/public/images/20240414_logo.png";
import HeaderMenu from "./items/HeaderMenu";
import Layout from "./layouts/Layout";
import { HeaderProps } from "@/interfaces";

const Header = ({ header_props, lang }: HeaderProps) => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 35) {
      setHeaderBackground("bg-white");
      setTextColor("text-black");
    } else {
      setHeaderBackground("bg-transparent");
      setTextColor("text-white");
    }
  }, [clientWindowHeight]);

  return (
    <header
      className={`sticky top-0 z-10 !fixed top-0 inset-x-0 ${textColor} ${headerBackground}`}
    >
      <Layout backgroundColor="">
        <nav
          className="flex justify-between items-center py-2"
          aria-label="Global"
        >
          <div className="lg:flex">
            <Link
              href={`/${lang}`}
              className="text-sm text-base font-semibold leading-6 "
            >
              <Image src={logo} alt="Afin Tech Logo" className="w-56" />
            </Link>
          </div>
          <div className="hidden lg:flex lg:pt-2">
            <HeaderMenu header_props={header_props} />
          </div>
          <div className="flex lg\:block lg:pt-2">
            <LocaleSwitcher lang={lang} />
          </div>
        </nav>
      </Layout>
    </header>
  );
};

export default Header;
