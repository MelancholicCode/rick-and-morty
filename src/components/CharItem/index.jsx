import CharCard from '../CharCard';
import { StyledCharItem } from './index.styled';

const CharItem = ({char, onCharModal}) => {
  return (
    <StyledCharItem onClick={() => onCharModal(char)}>
      <CharCard char={char} width="100%" height="100%"/>
    </StyledCharItem>
  );
};

export default CharItem;