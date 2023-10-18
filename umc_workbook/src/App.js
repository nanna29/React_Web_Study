import { dummy } from "./movieDummy.js";
import Movie from "./components/Movie.jsx";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <AppContainer>
        {
          dummy.results.map((item) => {
            return (
              <Movie
              //왼쪽 변수가 자체 지정 변수 (Movie.jsx 파일에서 props.XXX 로 사용하는 변수)
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}          
              />
            )
          })
        }
      </AppContainer>
      
    </div>
  );
}

export default App;
