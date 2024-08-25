export type UserType = {
  name: string;
  email: string;
};

export enum MediaType {
  Book,
}

export type MediaItemType = {
  id: string;
  type: MediaType;
  image: string;
  title: string;
  author: string[];
};

export type RecommendedItemType = MediaItemType & {
  recommender: string;
};

export type GroupedRecommendedItemType = MediaItemType & {
  recommenders: string[];
};
