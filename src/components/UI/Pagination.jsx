import { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import arrowImg from "../../img/arrow.svg";

const PaginationBox = styled.div`
display: flex;
gap: 5px;
`;

const PageButton = styled.button`
cursor: pointer;
background-color: ${(props) => props.active ? '#eee' : 'transparent'};
color: ${(props) => (props.active ? '#333' : '#eee')};
font-size: 18px;
padding: 8px 12px;
border: none;
border-radius: 5px;
`;

function Pagination({ totalPages, currentPage, setPage }) {
  const [pageState, setPageState] = useState(currentPage);

  const onChangePage = (pageNumber) => {
    setPageState(pageNumber);
    setPage(pageNumber);
  };

  const renderPages = () => {
    const pages = [];
    let startPage = 1;
    if (pageState > 3) {
      startPage = pageState - 2;
    }
    let endPage = startPage + 4;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - 4;
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PageButton
          key={i}
          active={i === pageState}
          onClick={() => onChangePage(i)}
        >
          {i}
        </PageButton>
      );
    }
    return pages;
  };

  return (
    <PaginationBox>
      <PageButton onClick={() => onChangePage(1)}>
        <Icon src={arrowImg} width="20px" height="20px" rotate="180"/>
      </PageButton>
      {renderPages()}
      <PageButton onClick={() => onChangePage(totalPages)}>
        <Icon src={arrowImg} width="20px" height="20px"/>
      </PageButton>
    </PaginationBox>
  );
}

export default Pagination;