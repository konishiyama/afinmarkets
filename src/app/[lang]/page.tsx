import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Product from "./components/Product";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Header header_props={dictionary.header_props} lang={lang} />
      <Cover cover_props={dictionary.cover_props} lang={lang} />
      <Product product_props={dictionary.product_props} lang={lang} />
      <Join join_props={dictionary.join_props} lang={lang} />
      <Footer footer_props={dictionary.header_props} lang={lang} />
    </main>
  );
}
