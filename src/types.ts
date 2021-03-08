export interface Article {
  id: number;
  title: string;
  publisher: string;
  publisherId: string;
  source: string;
  status: "AVAILABLE" | "NOTYET";
  categoryName: string;
  categoryId: number;
  badgeText?: string;
  thumbnail: {
    type: "IMAGE";
    hash: string;
  };
  url: {
    hash: string;
    url: string;
  };
  postId: string;
}
