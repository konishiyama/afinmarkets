// Team interfaces
export interface Member {
  fullname: string;
  title: string;
  description: string;
  img_path: string;
}

export interface Members {
  [key: string]: Member;
}

// Features interfaces
export interface CardItem {
  title: string;
  comment: string;
  img_path: string;
}

export interface Cards {
  [key: string]: CardItem;
}

// Join interfaces
export interface FormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

export interface JoinProps {
  join_props: {
    title1: string;
    titleBlue: string;
    title2: string;
    comment: string;
    placeholderName: string;
    placeholderEmail: string;
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
}
