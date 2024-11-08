"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Locale } from "../../../i18n-config";
import LocaleSwitcher from "./items/LocaleSwitcher";
import logo_text_white from "/public/images/20241106_logo_white.png";
import logo_text_base from "/public/images/20241106_logo_base.png";
import HeaderMenu from "./items/HeaderMenu";
import Layout from "./layouts/Layout";
import { HeaderProps } from "@/interfaces";

const Header = ({ header_props, lang }: HeaderProps) => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [logo, setLogo] = useState(logo_text_white);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 35) {
      setLogo(logo_text_base);
      setHeaderBackground("bg-white");
      setTextColor("text-base");
    } else {
      setLogo(logo_text_white);
      setHeaderBackground("bg-transparent");
      setTextColor("text-white");
    }
  }, [clientWindowHeight]);

  return (
    <header
      className={`px-8 lg:px-16 xl:px-32 sticky top-0 z-10 !fixed top-0 inset-x-0 ${textColor} ${headerBackground}`}
    >
      {/* <Layout backgroundColor=""> */}
      <nav
        className="flex justify-between items-center py-4"
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
        <div className="hidden lg:flex">
          <HeaderMenu header_props={header_props} />
        </div>
        <div className="flex lg\:block">
          <LocaleSwitcher lang={lang} />
        </div>
      </nav>
      {/* </Layout> */}
    </header>
  );
};

export default Header;
