import styled from "styled-components";
import CharItem from "./CharItem";

const StyledCharList = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
`;

const CharList = ({chars}) => {
  return (
    <StyledCharList>
      {chars.map(char => (
        <CharItem>
          <p>{char.name}</p>
          <p>{char.status}</p>
          <p>{char.gender}</p>
          <p>Appear in {char.episode.length} episodes</p>
        </CharItem>
      ))}
    </StyledCharList>
  );
};

export default CharList;