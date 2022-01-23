import { useParams } from "react-router-dom";
import { bookAPI } from "../services/BookService";
import NotFound from "./404";
import Loader from "../components/Loader";
import Helmet from "react-helmet";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Book = () => {
  const { bookId } = useParams();
  if (!bookId) return <NotFound />;

  const { data, error, isLoading, isFetching } = bookAPI.useGetByIdQuery(parseInt(bookId, 10));
  if (error) return <NotFound />;

  if (isFetching || isLoading || !data) return <Loader />;

  return (
    <>
      <Helmet>
        <title>
          {data.title} by {data?.authors?.map((author) => author.name).join(" / ")} – The Book
          Archive
        </title>
      </Helmet>

      <Grid container spacing={2}>
        <Grid item sm={6} sx={{ display: { xs: "none", sm: "flex" } }}>
          <CardMedia component="img" image={data.formats["image/jpeg"]} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h2">
                {data.title}
              </Typography>
              <Typography variant="subtitle1">
                by {data.authors.map((author) => author.name).join(" / ")}
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "block", sm: "none" } }}>
              <CardMedia component="img" image={data.formats["image/jpeg"]} />
            </Grid>
            <Grid item>
              {data.bookshelves?.map((bs) => (
                <Chip label={bs} variant="outlined" key={bs} sx={{ m: 1 / 2 }} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Book;
