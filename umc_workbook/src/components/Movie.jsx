import React from "react";
import { MovieContainer } from "./Movie.style";
import { MovieInfo } from "./Movie.style";
import { MovieDescription } from "./Movie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/movie/${props.title}`, {
      state: { props },
    });
  };

  return (
    <MovieContainer>
      <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <MovieInfo>
        <h4>{props.title}</h4>
        <span>{props.vote_average}</span>
      </MovieInfo>
      <MovieDescription onClick={onClickImg}>
        <h4>{props.title}</h4>
        <span>{props.overview}</span>
      </MovieDescription>
    </MovieContainer>
  );
}
