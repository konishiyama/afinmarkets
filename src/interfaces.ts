import { type Locale } from "./i18n-config";

// Header interfaces
export interface HeaderProps {
  header_props: {
    Product: string;
    Features: string;
    Team: string;
    Join: string;
  };
  lang: Locale;
}

// Cover interfaces
export interface CoverProps {
  cover_props: {
    headline1: string;
    headline2: string;
    headline3: string;
    comment1: string;
    comment2: string;
    comment3: string;
    comment4: string;
    button1: string;
    button2: string;
  };
}

// Product interfaces
export interface ProductProps {
  product_props: {
    title: string;
    comment1: string;
    comment2: string;
  };
}

// Features interfaces
export interface FeaturesProps {
  features_props: {
    headline1: string;
    headline2: string;
    headline3: string;
    comment: string;
    feature_cards_props: Cards;
  };
}

export interface CardItem {
  title: string;
  comment: string;
  img_path: string;
}

export interface Cards {
  [key: string]: CardItem;
}

// Team interfaces
export interface TeamProps {
  team_props: {
    title: string;
    comment: string;
    members: Members;
  };
}

export interface Members {
  [key: string]: Member;
}

export interface Member {
  fullname: string;
  title: string;
  description: string;
  img_path: string;
  facebook_path: string;
  linkedin_path: string;
}

// Join interfaces
export interface FormData {
  name: string;
  email: string;
  country: string;
  // organization: string;
  message: string;
  language: Locale;
}

export interface JoinProps {
  join_props: {
    title1: string;
    titleBlue: string;
    title2: string;
    comment: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderCountry: string;
    placeholderOrg: string;
    placeholderMessage: string;
    submitButton: string;
    successfulModalTitle: string;
    errorModalTitle: string;
    successfulModalComment: string;
    errorModalComment: string;
    successfulModalButton: string;
    errorModalButton: string;
  };
  lang: Locale;
}

// Footer interfaces
export interface FooterProps {
  footer_props: {
    address: string;
    phone: string;
    email: string;
  };
  lang: Locale;
}
