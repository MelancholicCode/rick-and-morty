import styled from "styled-components";

export const StyledCharItem = styled.li`
  cursor: pointer;
  width: calc(25% - (10px * 3) / 4);
  max-width: 500px;
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