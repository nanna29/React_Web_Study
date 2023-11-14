import React from "react";
import { useLocation, useParams } from "react-router-dom";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
import { MovieDetailContainer } from "../components/Movie.style";

export default function TVDetail() {
  const { name } = useParams();
  const { state } = useLocation();

  return (
    <MovieDetailContainer>
      <img
        src={IMG_BASE_URL + state.props.poster_path}
        alt="TV 포스터"
        width="250"
        style={{ maxWidth: "100%" }}
      />
      <h1>{name}</h1>
    </MovieDetailContainer>
  );
}
