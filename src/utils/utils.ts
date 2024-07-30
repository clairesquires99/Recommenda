import { Book } from "../features/books/domain/types";
import {
  GroupedRecommendedItemType,
  MediaItemType,
  MediaType,
  RecommendedItemType,
} from "./types";

export const parseBookToMediaItem = (book: Book) => {
  const mediaItem: MediaItemType = {
    id: book.id,
    type: MediaType.Book,
    title: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks.thumbnail,
    author: book.volumeInfo.authors,
  };
  return mediaItem;
};

export function groupRecommendations(
  recommendations: RecommendedItemType[]
): GroupedRecommendedItemType[] {
  const groupedMap = new Map<string, GroupedRecommendedItemType>();

  recommendations.forEach((recommendation) => {
    const { id, recommender, ...mediaItemProps } = recommendation;

    if (groupedMap.has(id)) {
      groupedMap.get(id)!.recommenders.push(recommender);
    } else {
      groupedMap.set(id, {
        id,
        ...mediaItemProps,
        recommenders: [recommender],
      });
    }
  });

  return Array.from(groupedMap.values());
}
