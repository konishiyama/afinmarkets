// multilanguage setting are done based on this page:https://github.com/vercel/next.js/tree/canary/examples/app-dir-i18n-routing

export const i18n = {
  defaultLocale: "ja",
  locales: ["ja", "ko", "zh", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
