import React from "react";
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV.jsx";
import Celebrity from "./pages/Celebrity.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/Global.style.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/TV" element={<TV />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
