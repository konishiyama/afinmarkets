"use client";
import { usePathname } from "next/navigation";
import { NextPage } from "next";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";

import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ReactCountryFlag from "react-country-flag";

interface HeaderProps {
  lang: Locale;
}

const LocaleSwitcher: NextPage<HeaderProps> = ({ lang }) => {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const destination = lang === "ko" ? "ja" : "ko";
  const countryCode = lang === "ko" ? "JP" : "KR";

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="items-center font-semibold text-base inline-flex w-full justify-center px-4 py-2 hover:text-blueGray">
          <GlobeAltIcon className="h-5 w-5 text-base" aria-hidden="true" />
          <ChevronDownIcon
            className="ml-1 h-5 w-5 text-base"
            aria-hidden="true"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={redirectedPathName("en")}
                    className={`${
                      active ? "bg-blue text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    English
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={redirectedPathName("ja")}
                    className={`${
                      active ? "bg-blue text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    日本語
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={redirectedPathName("ko")}
                    className={`${
                      active ? "bg-blue text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    한국어
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={redirectedPathName("zh")}
                    className={`${
                      active ? "bg-blue text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    中文
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default LocaleSwitcher;
