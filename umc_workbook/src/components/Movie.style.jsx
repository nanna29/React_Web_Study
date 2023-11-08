import React from "react";
import styled from "styled-components";

export const MovieContainer = styled.div`
  margin: 16px;
  width: 250px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5ox rgba(0, 0, 0, 0.1);
  justify-content: center;
  > img {
    max-width: 100%;
  }
  &:hover {
    display: block;
    top: 16px;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  > h4 {
    margin: 0;
  }
  > span {
    margin-left: 3px;
  }
`;

export const MovieDetail = styled.div`
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
