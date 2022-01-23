import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import App from "./App";
import NotFound from "./pages/404";

const Book = lazy(() => import("./pages/book"));
const Books = lazy(() => import("./pages/books"));
const Recent = lazy(() => import("./pages/recent"));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Books />
            </Suspense>
          }
        />
        <Route
          path="recent"
          element={
            <Suspense fallback={<Loader />}>
              <Recent />
            </Suspense>
          }
        />
        <Route
          path=":bookId"
          element={
            <Suspense fallback={<Loader />}>
              <Book />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
