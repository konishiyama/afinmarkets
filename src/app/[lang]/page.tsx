import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/LocaleSwitcher";
import Header from "./components/Header";
import Language from "./components/Language";

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
