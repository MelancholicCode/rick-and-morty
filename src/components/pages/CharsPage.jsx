import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { apiUrl } from '../../utils/constants';
import CharList from '../CharList';
import Pagination from '../UI/Pagination';
import FlexWrapper from '../UI/FlexWrapper';
import Spinner from '../UI/Spinner';
import Modal from '../UI/Modal';
import CharCard from '../CharCard';
import CharSearch from '../CharSearch';

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
  const [modalActive, setModalActive] = useState(false);
  const [cardChar, setCardChar] = useState(null);
  const {isLoading, error, data, isSuccess} = useQuery(['chars', page], () => fetchChars(page));

  async function fetchChars(page) {
      const res = await fetch(`${apiUrl}character?page=${page}`)
      return await res.json();
  }

  const onCharModal = (char) => {
    setModalActive(true);
    setCardChar(char);
  }

  const render = () => {
    if (isLoading) return <Spinner/>;
    if (error) return <p>{error.message}</p>;
    if (data) return (
      <>
        <CharSearch onCharModal={onCharModal}/>
        {isSuccess && <CharList onCharModal={onCharModal} chars={data.results}/>}
        <Pagination totalPages={data.info.pages} currentPage={page} setPage={setPage}/>
      </>
    );
  }
  
  return (
    <StyledCharsPage>
      <Modal active={modalActive} setActive={setModalActive}>
        {cardChar && <CharCard char={cardChar}/>}
      </Modal>
      <Container>
        <FlexWrapper direction="column" gap="15px" align="center">
          {render()}
        </FlexWrapper>
      </Container>
    </StyledCharsPage>
  );
};

export default CharsPage;