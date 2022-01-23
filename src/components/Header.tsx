import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import HistoryOutlined from "@mui/icons-material/HistoryOutlined";
import LibraryBooksOutlined from "@mui/icons-material/LibraryBooksOutlined";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item>
              <Button component={Link} to="/" color="inherit" startIcon={<LibraryBooksOutlined />}>
                The Book Archive
              </Button>
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} />
            <Grid item>
              <Button component={Link} to="/recent" color="inherit" startIcon={<HistoryOutlined />}>
                Recently Viewed
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
