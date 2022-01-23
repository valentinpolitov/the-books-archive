import Backdrop from "@mui/material/Backdrop";
import Progress from "@mui/material/CircularProgress";

const Loader = () => (
  <Backdrop open invisible>
    <Progress />
  </Backdrop>
);

export default Loader;
