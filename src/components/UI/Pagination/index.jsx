import { useState } from 'react';

import Icon from '../Icon';
import { StyledPageButton, StyledPagination } from './index.styled';

import { doubleArrow } from '../../../img/icons';

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
        <StyledPageButton
          key={i}
          active={i === pageState}
          onClick={() => onChangePage(i)}
        >
          {i}
        </StyledPageButton>
      );
    }
    return pages;
  };

  return (
    <StyledPagination>
      <StyledPageButton onClick={() => onChangePage(1)}>
        <Icon src={doubleArrow} width="20px" height="20px"/>
      </StyledPageButton>
      {renderPages()}
      <StyledPageButton onClick={() => onChangePage(totalPages)}>
        <Icon src={doubleArrow} width="20px" height="20px" rotate="180"/>
      </StyledPageButton>
    </StyledPagination>
  );
}

export default Pagination;