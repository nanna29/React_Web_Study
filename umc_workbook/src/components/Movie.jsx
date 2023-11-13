import React, { useState } from "react";
import { MovieContainer } from "./Movie.style";
import { MovieInfo } from "./Movie.style";
//import { MovieDescription } from "./Movie.style";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

const MovieDescription = styled.div`
  display: none;
  vertical-align: middle;

  overflow: hidden;

  width: 218px;
  height: 408px;
  padding: 16px;
  background-color: black;
  opacity: 0.7;
  color: white;

  position: absolute;

  // MovieContainer가 hover 상태일때만 스타일 적용하게
  ${MovieContainer}:hover & {
    display: block;
    top: 16px;
  }
`;

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
