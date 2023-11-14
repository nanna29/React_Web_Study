import React from "react";
import { MovieContainer } from "./Movie.style";
import { MovieInfo } from "./Movie.style";
import { MovieDescription } from "./Movie.style";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

//Movies에서 전달받은 title, overview 등등이 props 안에 전달됨
export default function TV(props) {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/tvs/${props.name}`, {
      /* 
        /movie/${props.title} 페이지로 이동할 때 
        현재 Movie 컴포넌트에서 받은 props 값을 그대로 전달 
      */
      state: { props },
    });
  };
  return (
    <MovieContainer>
      <img src={IMG_BASE_URL + props.poster_path} alt="영화 포스터" />
      <MovieInfo>
        <h4>{props.name}</h4>
        <span>{props.vote_average}</span>
      </MovieInfo>
      <MovieDescription onClick={onClickImg}>
        <h4>{props.title}</h4>
        <span>{props.overview}</span>
      </MovieDescription>
    </MovieContainer>
  );
}
