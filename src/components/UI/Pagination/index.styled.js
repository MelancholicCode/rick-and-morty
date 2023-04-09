import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
`;

export const StyledPageButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.active ? '#eee' : 'transparent'};
  color: ${(props) => (props.active ? '#333' : '#eee')};
  font-size: 18px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
`;