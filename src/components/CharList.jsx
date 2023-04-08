import styled from "styled-components";
import CharItem from "./CharItem";

const StyledCharList = styled.ul`
display: flex;
gap: 10px;
flex-wrap: wrap;
max-width: 1000px;
`;

const CharList = ({chars, onCharModal}) => {
  return (
    <StyledCharList>
      {chars.map(char => (
        <CharItem key={char.id} char={char} onCharModal={onCharModal}/>
      ))}
    </StyledCharList>
  );
};

export default CharList;