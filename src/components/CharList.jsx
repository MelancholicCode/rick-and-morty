import styled from "styled-components";
import CharItem from "./CharItem";

const StyledCharList = styled.ul`
display: flex;
gap: 10px;
flex-wrap: wrap;
max-width: 1000px;
`;

const CharList = ({chars}) => {
  return (
    <StyledCharList>
      {chars.map(char => (
        <CharItem char={char}/>
      ))}
    </StyledCharList>
  );
};

export default CharList;