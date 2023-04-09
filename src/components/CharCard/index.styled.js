import styled from "styled-components";
import { FlexWrapper } from "../UI";

export const StyledCharCard = styled(FlexWrapper)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #eee;
  border-radius: 15px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;

export const CharImgWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
  display: block;
  width: 100%;
`;

export const CharName = styled.p`
  font-weight: 500;
  font-size: 18px;
`;