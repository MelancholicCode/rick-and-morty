import styled from 'styled-components';
import FlexWrapper from './UI/FlexWrapper';

const StyledCharCard = styled(FlexWrapper)`
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
background-color: #eee;
border-radius: 15px;
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
`;

const CharImgWrapper = styled.div`
overflow: hidden;
border-radius: 15px;
display: block;
width: 100%;
`;

const CharName = styled.p`
font-weight: 500;
font-size: 18px;
`;

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