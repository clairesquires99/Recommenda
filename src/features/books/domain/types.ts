export type Book = {
  id: string;
  volumeInfo: {
    title: string | null;
    authors: string[] | null;
    imageLinks: {
      thumbnail: string | null;
    } | null;
  } | null;
};
