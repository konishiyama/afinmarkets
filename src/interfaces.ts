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
