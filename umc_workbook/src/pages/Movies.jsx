import React from "react";
import styled from "styled-components";
import { dummy } from "../dummies/movieDummy.js";
import Movie from "../components/Movie.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
  position: relative;
`;

const Components = styled.div`
  position: relative;
`;

export default function Movies() {
  return (
    <AppContainer>
      {dummy.results.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Components>
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          </Components>
        );
      })}
    </AppContainer>
  );
}
