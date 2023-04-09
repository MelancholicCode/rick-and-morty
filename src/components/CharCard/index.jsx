import { CharImgWrapper, CharName, StyledCharCard } from './index.styled';
import {FlexWrapper} from '../UI';

const CharCard = ({char}) => {
  return (
    <StyledCharCard>
      <CharImgWrapper>
        <img src={char.image} alt="" width="100%" height="100%"/>
      </CharImgWrapper>
      <FlexWrapper direction="column" gap="5px">
        <CharName>{char.name}</CharName>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
        <p>Appears in {char.episode.length} episodes</p>
      </FlexWrapper>
    </StyledCharCard>
  );
};

export default CharCard;