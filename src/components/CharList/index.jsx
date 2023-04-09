import { StyledCharList } from "./index.styled";
import CharItem from "../CharItem";

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