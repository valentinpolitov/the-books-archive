import { useState, Fragment } from "react";
import { bookAPI } from "../services/BookService";
import { useDebounce, useSelector } from "../hooks";
import Helmet from "react-helmet";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import SearchBox from "../components/SearchBox";
import BookCard from "../components/BookCard";
import BookListItem from "../components/BookListItem";

const Books = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const preferedView = useSelector((state) => state.app.preferedView);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearch = (value: string) => {
    setPage(1);
    setSearchValue(value);
  };

  const search = useDebounce(searchValue, 500);

  const { data, isLoading, isFetching } = bookAPI.useGetAllQuery({
    page,
    ...(search && { search })
  });

  const loading = isLoading || isFetching;

  const count = (data && data.count && Math.ceil(data.count / 32)) ?? 0;

  return (
    <Fragment>
      <Helmet>
        <title>The Books Archive</title>
      </Helmet>

      <SearchBox searchValue={searchValue} setSearchValue={handleSearch} loading={loading} />

      <Grid container spacing={2} sx={{ pt: 2 }}>
        {!loading && (!data || !data.results || data.results.length < 1) ? (
          <Grid item>No matching results</Grid>
        ) : (
          data?.results?.map((book) =>
            preferedView === "grid" ? (
              <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
                <BookCard {...book} />
              </Grid>
            ) : (
              <Grid item key={book.id} xs={12}>
                <BookListItem {...book} />
              </Grid>
            )
          )
        )}

        {!!data?.count && data.count > 32 && (
          <Grid item xs={12} sx={{ justifyContent: "center" }}>
            <Pagination count={count} page={page} onChange={handlePageChange} />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default Books;
