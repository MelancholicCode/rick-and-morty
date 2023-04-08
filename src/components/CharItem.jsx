import React from 'react';
import styled from 'styled-components';
import FlexWrapper from './UI/FlexWrapper';

const StyledCharItem = styled.li`
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
width: calc(25% - (10px * 3) / 4);
max-width: 500px;
flex-direction: column;
background-color: #eee;
border-radius: 15px;
padding: 20px;
@media (max-width: 1024px) {
  width: calc(33.33% - (10px * 2) / 3);
}
@media (max-width: 768px) {
  width: calc(50% - 10px / 2);
}
@media (max-width: 480px) {
  width: 90%;
  margin: 0 auto;
}
`;

const CharImgWrapper = styled.div`
overflow: hidden;
border-radius: 15px;
display: block;
width: 200px;
height: 200px;
`;

const CharName = styled.p`
font-weight: 500;
font-size: 18px;
`;

const CharItem = ({char, onCharModal}) => {
  return (
    <StyledCharItem onClick={() => onCharModal(char)}>
      <CharImgWrapper>
        <img src={char.image} width="100%" height="100%" alt="" />
      </CharImgWrapper>
      <FlexWrapper direction="column" gap="5px">
        <CharName>{char.name}</CharName>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
        <p>Appears in {char.episode.length} episodes</p>
      </FlexWrapper>
    </StyledCharItem>
  );
};

export default CharItem;