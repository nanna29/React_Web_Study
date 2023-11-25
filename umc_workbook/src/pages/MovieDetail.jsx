import React from "react";
import { useLocation, useParams } from "react-router-dom";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
import { MovieDetailContainer } from "../components/Movie.style";

export default function MovieDetail() {
  const { title } = useParams(); // URL의 파라미터 추출
  const { state } = useLocation(); // 현재 페이지의 URL 정보를 가져오는 데 사용

  return (
    <MovieDetailContainer>
      <img
        src={IMG_BASE_URL + state.props.poster_path}
        alt="영화 포스터"
        width="250"
        style={{ maxWidth: "100%" }}
      />
      <h1>{title}</h1>
    </MovieDetailContainer>
  );
}
