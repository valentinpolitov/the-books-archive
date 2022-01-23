import type { Book } from "../types/Books";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { appAction } from "../store/slices/appSlice";
import { useDispatch } from "../hooks";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FileDownloadOutlined from "@mui/icons-material/FileDownloadOutlined";

const BookListItem = (book: Book) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToRecent = () => {
    dispatch(appAction.addBookToRecentlyViewed(book.id));
  };

  return (
    <ListItem key={book.id} component={Paper}>
      <ListItemAvatar
        onClick={() => {
          addToRecent();
          navigate(`/${book.id}`);
        }}
        sx={{ cursor: "pointer" }}
      >
        <Avatar src={book.formats["image/jpeg"]} alt={book.title} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link component={RouterLink} color="primary" to={`/${book.id}`} onClick={addToRecent}>
            {book.title}
          </Link>
        }
        secondary={
          <Stack direction="row" spacing={1}>
            <Typography component="span">
              {book.authors.map((author) => author.name).join(" / ")}
            </Typography>
            <Chip
              icon={<FileDownloadOutlined />}
              label={book.download_count}
              variant="outlined"
              size="small"
            />
          </Stack>
        }
      />
    </ListItem>
  );
};

export default BookListItem;
