// interfaces.ts
export interface Member {
  fullname: string;
  title: string;
  description: string;
  img_path: string;
}

export interface Members {
  [key: string]: Member;
}
