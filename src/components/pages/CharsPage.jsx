import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { apiUrl } from '../../utils/constants';
import CharList from '../CharList';
import Pagination from '../UI/Pagination';
import FlexWrapper from '../UI/FlexWrapper';
import Spinner from '../UI/Spinner';

const StyledCharsPage = styled.div`
padding: 20px 0;
`;

const Container = styled.div`
max-width: 1230px;
padding: 0 15px;
margin: 0 auto;
`;

const CharsPage = () => {
  const [page, setPage] = useState(1);
  const {isLoading, error, data, isSuccess} = useQuery(['chars', page], () => fetchChars(page));

  async function fetchChars(page) {
      const res = await fetch(`${apiUrl}character?page=${page}`)
      return await res.json();
  }

  if (isLoading) return <Spinner/>;
  if (error) return <p>{error.message}</p>;
  
  return (
    <StyledCharsPage>
      <Container>
        <FlexWrapper direction="column" gap="15px" align="center">
          {isSuccess && <CharList chars={data.results}/>}
          {isLoading && <Spinner/>}
          <Pagination totalPages={data.info.pages} currentPage={page} setPage={setPage}/>
        </FlexWrapper>
      </Container>
    </StyledCharsPage>
  );
};

export default CharsPage;