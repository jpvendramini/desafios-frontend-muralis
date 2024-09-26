export type commentType = {
  id?: number;
  imgPath?: string;
  userName: string;
  commentDate: string;
  likes?: number;
  comment: string;
  subComment?: {
    id?: number;
    imgPath?: string;
    userName: string;
    commentDate: string;
    likes?: number;
    comment: string;
  }[];
};
