import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { setupStore } from "./store";
import theme from "./theme";
import Router from "./router";

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
