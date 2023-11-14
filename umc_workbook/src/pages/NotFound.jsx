import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundContainer = styled.div`
  margin-top: 30px;
  margin-left: 250px;
`;

export default function NotFound() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate(`/`);
  };

  return (
    <NotFoundContainer>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <br />
      <h2>주소가 잘못 되었거나, 더 이상 제공되지 않는 페이지입니다.</h2>
      <h2 onClick={onClickHome} style={{ color: "red" }}>
        메인 페이지로 이동
      </h2>
    </NotFoundContainer>
  );
}
