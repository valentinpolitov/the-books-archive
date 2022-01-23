import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import Offset from "./components/Offset";

const Main = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  minHeight: "100vh"
}));

function App() {
  return (
    <React.Fragment>
      <Header />

      <Main>
        <Container maxWidth="lg" sx={{ pt: 4 }}>
          <Offset />
          <Outlet />
          <Offset />
        </Container>
      </Main>
    </React.Fragment>
  );
}

export default App;
