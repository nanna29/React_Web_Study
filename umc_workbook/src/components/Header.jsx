import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginControl from "./LoginControl";

import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #22254b;

  padding: 20px 0 20px 200px;
  display: flex;
`;

const Navigator = styled.li`
  list-style-type: none;
  margin-left: 20px;
  color: white;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>

      <Link to="/movies" style={{ textDecoration: "none" }}>
        <Navigator>영화</Navigator>
      </Link>
      <Link to="/tvs" style={{ textDecoration: "none" }}>
        <Navigator>TV 프로그램</Navigator>
      </Link>
      <Link to="/celebrity" style={{ textDecoration: "none" }}>
        <Navigator>인물</Navigator>
      </Link>
      <LoginControl />
    </HeaderContainer>
  );
}
