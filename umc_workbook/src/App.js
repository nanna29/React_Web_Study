import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/Global.style.jsx";

import Movies from "./pages/Movies.jsx";
import TVs from "./pages/TVs.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import TVDetail from "./pages/TVDetail.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvs" element={<TVs />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movies/:title" element={<MovieDetail />} />
          <Route path="/tvs/:name" element={<TVDetail />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
