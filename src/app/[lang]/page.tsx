import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/locale-switcher";
import Header from "./components/Header";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      {/* <div>hello</div> */}
      <Header header_props={dictionary.header_props} lang={lang} />
    </main>
  );
}
