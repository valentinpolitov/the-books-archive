import type { Book } from "../types/Books";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { appAction } from "../store/slices/appSlice";
import { useDispatch } from "../hooks";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined";

const BookCard = (book: Book) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToRecent = () => {
    dispatch(appAction.addBookToRecentlyViewed(book.id));
  };

  return (
    <Card key={book.id} component="article">
      <CardHeader
        title={
          <Link
            component={RouterLink}
            color="primary"
            to={`/${book.id}`}
            onClick={addToRecent}
            variant="h5"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineClamp: 2
            }}
          >
            {book.title}
          </Link>
        }
        subheader={book.authors.map((author) => author.name).join(" / ")}
      />
      {book.formats["image/jpeg"] && (
        <Box sx={{ position: "relative", maxHeight: { sm: "500px" }, overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={book.formats["image/jpeg"]}
            alt={book.title}
            onClick={() => {
              addToRecent();
              navigate(`/${book.id}`);
            }}
            sx={{ cursor: "pointer" }}
          />
        </Box>
      )}
      <CardContent>
        <Chip icon={<FileDownloadOutlined />} label={book.download_count} />
      </CardContent>
    </Card>
  );
};

export default BookCard;
