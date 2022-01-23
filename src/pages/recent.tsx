import { useState, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { bookAPI } from "../services/BookService";
import { useSelector } from "../hooks";
import Helmet from "react-helmet";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";

const RecentViewed = () => {
  const ids = useSelector((state) => state.app.recentlyViewed);
  const [page, setPage] = useState(1);

  if (!ids.length) {
    return (
      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h2">
            Recently viewed books
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            No recently viewed books. Go to{" "}
            <Link component={RouterLink} to="/">
              Book Archive
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    );
  }

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { data, isLoading, isFetching } = bookAPI.useGetAllQuery({
    page,
    ids
  });
  if (isLoading || isFetching) return <Loader />;

  const count = (data && data.count && Math.ceil(data.count / 32)) ?? 0;

  return (
    <Fragment>
      <Helmet>
        <title>Recently viewed books – The Books Archive</title>
      </Helmet>

      <Grid container spacing={2} sx={{ pt: 2 }}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h2">
            Recently viewed books
          </Typography>
        </Grid>

        {!data || !data.results || data.results.length < 1 ? (
          <Grid item>No matching results</Grid>
        ) : (
          data?.results?.map((book) => (
            <Grid item key={book.id} xs={12} sm={6} md={4} lg={3}>
              <BookCard {...book} />
            </Grid>
          ))
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

export default RecentViewed;
