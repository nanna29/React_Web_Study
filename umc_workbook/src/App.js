import React from "react";
import Movies from "./components/Movies.jsx";
import TV from "./components/TV.jsx";
import Celebrity from "./components/Celebrity.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
