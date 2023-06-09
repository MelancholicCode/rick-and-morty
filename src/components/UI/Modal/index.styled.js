import styled from "styled-components";

export const StyledModal = styled.div`
  z-index: 99;
  pointer-events: ${props => props.active ? 'all' : 'none'};
  opacity: ${props => props.active ? '1' : '0'};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModalContent = styled.div`
  padding: 0 15px;
`;