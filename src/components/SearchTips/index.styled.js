import styled from "styled-components";

export const TipsList = styled.ul`
  overflow-y: auto;
  background-color: #fff; 
  border: 1px solid #eee;
  border-radius: 10px;
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
  max-height: 200px;
  display: flex;
  flex-direction: column;
`;

export const TipsItem = styled.li`
  cursor: pointer;
  padding: 10px;
  border: 1px solid #eee;
  &:hover {
    background: #eee;
  }
`;