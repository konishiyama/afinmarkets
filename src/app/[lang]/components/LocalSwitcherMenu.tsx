import { usePathname } from "next/navigation";
import { NextPage } from "next";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import { i18n, type Locale } from "../../../i18n-config";

interface HeaderProps {
  lang: string;
}

const LocalSwitcherMenu: NextPage<HeaderProps> = ({ lang }) => {
  const pathName = usePathname();
  const languageMapping: Record<string, string> = {
    en: "English",
    ja: "日本語",
    ko: "한국어",
    zh: "中文",
  };
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  const languageName = languageMapping[lang] || lang;

  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={redirectedPathName(lang)}
          className={`${
            active ? "bg-blue-500 text-white" : "text-gray-900"
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          {languageName}
        </Link>
      )}
    </Menu.Item>
  );
};

export default LocalSwitcherMenu;
