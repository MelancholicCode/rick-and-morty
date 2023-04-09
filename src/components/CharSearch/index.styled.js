import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  padding: 0 10px;
`;

export const SearchInput = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
  background: transparent;
  width: calc(100% - 40px);
`;

export const SearchIcon = styled.div`
  padding: 10px;
`;