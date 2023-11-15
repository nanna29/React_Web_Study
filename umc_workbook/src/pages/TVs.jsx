import React from "react";
import styled from "styled-components";
import { dummy } from "../dummies/tvDummy.js";
import TV from "../components/TV.jsx";

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

export default function TVs() {
  return (
    <AppContainer>
      {dummy.results.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Components>
            <TV
              name={item.name}
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
