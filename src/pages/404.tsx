import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => (
  <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Box color="primary.light">
      <ErrorOutlineIcon sx={{ fontSize: 72 }} />
    </Box>
    <Typography variant="h6">
      Page you are looking for does not exist. Go to{" "}
      <Link component={RouterLink} to="/">
        Book Archive
      </Link>
      .
    </Typography>
  </Box>
);

export default NotFound;
