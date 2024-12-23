"use client";

import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";
import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import LocalSwitcherMenu from "./LocalSwitcherMenu";

interface HeaderProps {
  lang: Locale;
}

const LocaleSwitcher = ({ lang }: HeaderProps) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="items-center font-semibold inline-flex w-full justify-center py-2">
          <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
          <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
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
              <LocalSwitcherMenu lang={lang} />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default LocaleSwitcher;
