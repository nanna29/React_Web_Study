import React from "react";
import { MovieContainer } from "./Movie.style";
import { MovieInfo } from "./Movie.style";
import { MovieDetail } from "./Movie.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  return (
    <MovieContainer className="movie-container">
      <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <MovieInfo>
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </MovieInfo>
      <MovieDetail className="movieDetail">
        <h4>{props.title}</h4>
        <span>{props.overview}</span>
      </MovieDetail>
    </MovieContainer>
  );
}
