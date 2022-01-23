import { Book, Books, MimeType } from "./../types/Books";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

type QueryParams =
  | {
      page?: number;
      sort?: "ascending" | "descending" | "popular";
      topic?: string;
      search?: string;
      ids?: number[];
      languages?: string[];
      mime_type?: MimeType;
      copyright?: boolean | null;
    }
  | never;

export const bookAPI = createApi({
  reducerPath: "bookAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gutendex.com/books" }),
  endpoints: (build) => ({
    getAll: build.query<Books, QueryParams>({ query: (params) => ({ url: "/", params }) }),
    getById: build.query<Book, number>({ query: (id) => ({ url: `/${id}` }) })
  })
});
