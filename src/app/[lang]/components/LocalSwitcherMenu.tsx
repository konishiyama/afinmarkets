import { usePathname } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";
import Link from "next/link";
import { Menu } from "@headlessui/react";

interface HeaderProps {
  lang: Locale;
}

const LocalSwitcherMenu = ({ lang }: HeaderProps) => {
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

  return (
    <>
      {Object.entries(languageMapping).map(([langCode, langName]) => (
        <Menu.Item key={langCode}>
          {({ active }) => (
            <Link
              href={redirectedPathName(langCode)}
              className={`${
                active ? "bg-blue-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
            >
              {langName}
            </Link>
          )}
        </Menu.Item>
      ))}
    </>
  );
};

export default LocalSwitcherMenu;
