import styled from "styled-components";
import CharsPage from "./components/pages/CharsPage";

const StyledApp = styled.div`
min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <CharsPage/>
    </StyledApp>
  );
}

export default App;
