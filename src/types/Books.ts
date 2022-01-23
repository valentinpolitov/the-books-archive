export interface Person {
  birth_year: number | null;
  death_year: number | null;
  name: string;
}

export type MimeType =
  | "application/epub+zip"
  | "application/rdf+xml"
  | "application/x-mobipocket-ebook"
  | "text/html"
  | "text/plain; charset=utf-8"
  | "application/zip"
  | "image/jpeg"
  | "text/html; charset=utf-8";

export interface Book {
  id: number;
  title: string;
  authors: Person[];
  translators: Person[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: { [key: MimeType | string]: string | undefined };
  download_count: number;
}

export interface Books {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
