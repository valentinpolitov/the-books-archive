import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "../hooks";
import { appAction } from "../store/slices/appSlice";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ViewListOutlined from "@mui/icons-material/ViewListOutlined";

interface SearchboxProps<T = string> {
  searchValue: T;
  setSearchValue: (value: T) => void;
  loading: boolean;
}

const SearchBox = ({ searchValue, setSearchValue, loading }: SearchboxProps) => {
  const dispatch = useDispatch();
  const preferedView = useSelector((state) => state.app.preferedView);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue("");
  };

  const handleView = (
    _event: React.MouseEvent<HTMLElement, MouseEvent>,
    newValue: typeof preferedView
  ) => {
    if (newValue === null) return;
    dispatch(appAction.setPreferedView(newValue));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <TextField
          fullWidth
          label="Find a book"
          value={searchValue}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                <Fade in={loading}>
                  <CircularProgress size={20} />
                </Fade>
                <Fade in={!!searchValue}>
                  <IconButton onClick={handleClearSearch}>
                    <CloseOutlined />
                  </IconButton>
                </Fade>
              </>
            )
          }}
        />
      </Grid>

      <Grid item>
        <ToggleButtonGroup
          size="large"
          color="primary"
          exclusive
          value={preferedView}
          onChange={handleView}
        >
          <ToggleButton value="grid">
            <GridViewOutlined />
          </ToggleButton>
          <ToggleButton value="list">
            <ViewListOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
