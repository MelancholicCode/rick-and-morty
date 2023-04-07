import { useState } from 'react';
import styled from 'styled-components';

const PaginationBox = styled.div`
display: flex;
gap: 5px;
`;

const PageButton = styled.button`
cursor: pointer;
background-color: ${(props) => props.active ? '#333' : 'transparent'};
color: ${(props) => (props.active ? '#fff' : '#333')};
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
    if (pageState > 5) {
      startPage = pageState - 4;
    }
    let endPage = startPage + 9;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - 9;
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
      {renderPages()}
    </PaginationBox>
  );
}

export default Pagination;