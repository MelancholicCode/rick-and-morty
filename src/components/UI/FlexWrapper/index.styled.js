import styled from "styled-components";

export const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0'};
  justify-content: ${props => props.justify || 'none'};
  align-items: ${props => props.align || 'none'};
`;