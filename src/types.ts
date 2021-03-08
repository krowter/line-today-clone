export interface BasePost {
  id: number;
  title: string;
  publisher: string;
  publisherId: string;
  source: string;
  status: string;
  categoryName: string;
  categoryId: number;
  badgeText?: string;
  thumbnail: {
    type: string;
    hash: string;
  };
  url: {
    url: string;
  };
  postId: string;
}

export type Article = BasePost;
export type MoviePost = BasePost & {
  broadcastStatus: string;
};
