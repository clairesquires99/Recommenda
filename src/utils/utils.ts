import { Book } from "../features/books/domain/types";
import { MediaItem } from "./types";

export const parseBookToMediaItem = (book: Book) => {
  const mediaItem: MediaItem = {
    id: book.id,
    type: "book",
    title: book.volumeInfo.title,
    image: book.volumeInfo.imageLinks.thumbnail,
    author: book.volumeInfo.authors,
  };
  return mediaItem;
};
